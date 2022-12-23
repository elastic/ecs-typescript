import { has, set } from 'lodash';
import { EcsInterface } from './interface';
import type { EcsFieldSpec, EcsGroupSpec, EcsNestedSpec } from '../types';

const SPEC_IDENTIFIER = '__spec';
const DESCRIPTION_IDENTIFIER = '__description';
const TOP_LEVEL_IDENTIFIER = '__top_level';
const ROOT_IDENTIFIER = '__root';

type SpecJson = Record<string, unknown | SpecInternals>;
type SpecInternals = {
  [DESCRIPTION_IDENTIFIER]?: string;
  [SPEC_IDENTIFIER]?: EcsFieldSpec;
  [TOP_LEVEL_IDENTIFIER]: boolean;
  [ROOT_IDENTIFIER]: boolean;
};

function isGroupSpec(spec: unknown): spec is EcsGroupSpec & SpecInternals {
  return (
    (spec as EcsGroupSpec & SpecInternals)[DESCRIPTION_IDENTIFIER] !== undefined
  );
}

function isFieldSpec(spec: unknown): spec is EcsFieldSpec {
  return (
    (spec as EcsFieldSpec).name !== undefined &&
    (spec as EcsFieldSpec).type !== undefined
  );
}

/**
 * Ensures correct json paths are generated from the flat_name's.
 * @param group Group name
 * @param flatName flat_name for the respective field
 * @returns
 */
function resolveFieldPath(
  group: string,
  groupSpec: EcsGroupSpec,
  flatName: string
): string {
  if (groupSpec.root) {
    return `${group}.${flatName}`;
  }

  return flatName.includes('.') ? flatName : `${group}.${flatName}`;
}

export function buildSpecJson(spec: EcsNestedSpec): SpecJson {
  const json: SpecJson = {};

  for (const [group, groupSpec] of Object.entries(spec)) {
    set(json, group, {
      [DESCRIPTION_IDENTIFIER]: groupSpec.description,
      [TOP_LEVEL_IDENTIFIER]: groupSpec.reusable?.top_level !== false,
      [ROOT_IDENTIFIER]: groupSpec.root === true,
    });

    for (const [, fieldSpec] of Object.entries(groupSpec.fields)) {
      set(
        json,
        `${resolveFieldPath(
          group,
          groupSpec,
          fieldSpec.flat_name
        )}.${SPEC_IDENTIFIER}`,
        fieldSpec
      );
    }
  }

  return json;
}

export function buildInterfaceProps(
  i: EcsInterface,
  groupName: string,
  groupProps: SpecJson
): void {
  if (has(groupProps, SPEC_IDENTIFIER)) {
    const props = groupProps[SPEC_IDENTIFIER];
    if (!isFieldSpec(props)) {
      return;
    }

    // reached the leaf node; add property
    i.addProperty(groupName, props);
    return;
  }

  // haven't reached a leaf node yet; create a new interface and recurse
  for (const [nextGroupName, nextGroupProps] of Object.entries(groupProps)) {
    if (
      [DESCRIPTION_IDENTIFIER, TOP_LEVEL_IDENTIFIER, ROOT_IDENTIFIER].includes(
        nextGroupName
      )
    ) {
      continue;
    }

    const nextGroupSpecJson = nextGroupProps as SpecJson;

    if (has(nextGroupSpecJson, SPEC_IDENTIFIER)) {
      // if the next node will be a leaf, skip creating a new interface
      // and attach to the existing one instead
      i.addProperty(
        nextGroupName,
        nextGroupSpecJson[SPEC_IDENTIFIER] as EcsFieldSpec
      );
      buildInterfaceProps(i, nextGroupName, nextGroupSpecJson);
    } else {
      const nextInterface = new EcsInterface({
        name: nextGroupName,
        description: '',
        reusable: false,
      });
      i.addProperty(nextGroupName, nextInterface);
      buildInterfaceProps(nextInterface, nextGroupName, nextGroupSpecJson);
    }
  }
}

export function buildTypes(spec: EcsNestedSpec): EcsInterface[] {
  const json = buildSpecJson(spec);

  const interfaces: EcsInterface[] = [];

  for (const [groupName, groupProps] of Object.entries(json)) {
    if (isGroupSpec(groupProps)) {
      const i = new EcsInterface({
        description: groupProps[DESCRIPTION_IDENTIFIER] ?? '',
        name: groupName,
        reusable: groupProps[TOP_LEVEL_IDENTIFIER],
        root: groupProps[ROOT_IDENTIFIER],
      });
      buildInterfaceProps(i, groupName, groupProps);
      interfaces.push(i);
    }
  }

  return interfaces;
}
