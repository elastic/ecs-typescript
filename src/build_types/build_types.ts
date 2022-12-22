import { set } from 'lodash';
import { Interface } from './interface';
import type { EcsFieldSpec, EcsGroupSpec, EcsNestedSpec } from '../types';
import { GROUP_TRACING } from '../constants';

const SPEC_IDENTIFIER = '__spec';
const DESCRIPTION_IDENTIFIER = '__description';
const TOP_LEVEL_IDENTIFIER = '__top_level';

type SpecJson = Record<string, unknown | SpecInternals>;
type SpecInternals = {
  [DESCRIPTION_IDENTIFIER]?: string;
  [SPEC_IDENTIFIER]?: EcsFieldSpec;
  [TOP_LEVEL_IDENTIFIER]: boolean;
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
function resolveFieldPath(group: string, flatName: string): string {
  if (group === GROUP_TRACING) {
    return `${group}.${flatName}`;
  }

  return flatName.includes('.') ? flatName : `${group}.${flatName}`;
}

export function buildSpecJson(spec: EcsNestedSpec): SpecJson {
  const json: SpecJson = {};

  for (const [group, groupSpec] of Object.entries(spec)) {
    console.log(groupSpec);
    set(json, group, {
      [DESCRIPTION_IDENTIFIER]: groupSpec.description,
      [TOP_LEVEL_IDENTIFIER]: groupSpec.reusable?.top_level !== false,
    });

    for (const [, fieldSpec] of Object.entries(groupSpec.fields)) {
      set(
        json,
        `${resolveFieldPath(group, fieldSpec.flat_name)}.${SPEC_IDENTIFIER}`,
        fieldSpec
      );
    }
  }

  return json;
}

export function buildInterfaceProps(
  i: Interface,
  groupName: string,
  groupProps: SpecJson
): void {
  if (groupProps.hasOwnProperty(SPEC_IDENTIFIER)) {
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
    if (nextGroupName === DESCRIPTION_IDENTIFIER) {
      continue;
    }

    if (nextGroupName === TOP_LEVEL_IDENTIFIER) {
      continue;
    }
    const nextGroupSpecJson = nextGroupProps as SpecJson;

    if (nextGroupSpecJson.hasOwnProperty(SPEC_IDENTIFIER)) {
      // if the next node will be a leaf, skip creating a new interface
      // and attach to the existing one instead
      i.addProperty(
        nextGroupName,
        nextGroupSpecJson[SPEC_IDENTIFIER] as EcsFieldSpec
      );
      buildInterfaceProps(i, nextGroupName, nextGroupSpecJson);
    } else {
      const nextInterface = new Interface({
        name: nextGroupName,
        description: '',
        reusable: false,
      });
      i.addProperty(nextGroupName, nextInterface);
      buildInterfaceProps(nextInterface, nextGroupName, nextGroupSpecJson);
    }
  }
}

export function buildTypes(spec: EcsNestedSpec): Interface[] {
  const json = buildSpecJson(spec);

  const interfaces: Interface[] = [];

  for (const [groupName, groupProps] of Object.entries(json)) {
    if (isGroupSpec(groupProps)) {
      const i = new Interface({
        description: groupProps[DESCRIPTION_IDENTIFIER] ?? '',
        name: groupName,
        reusable: groupProps[TOP_LEVEL_IDENTIFIER],
      });
      buildInterfaceProps(i, groupName, groupProps);
      interfaces.push(i);
    }
  }

  return interfaces;
}
