import { set } from 'lodash';
import { Interface } from './interface';
import type { EcsFieldSpec, EcsGroupSpec, EcsNestedSpec } from '../types';

const SPEC_IDENTIFIER = '__spec';
const DESCRIPTION_IDENTIFIER = '__description';
const BASE_GROUP_NAME = 'base';

type SpecJson = Record<string, unknown | SpecInternals>;
type SpecInternals = {
  __description?: string;
  __spec?: EcsFieldSpec;
};

function isGroupSpec(spec: unknown): spec is EcsGroupSpec & SpecInternals {
  return (spec as EcsGroupSpec & SpecInternals)[DESCRIPTION_IDENTIFIER] !== undefined;
}

function isFieldSpec(spec: unknown): spec is EcsFieldSpec {
  return (
    (spec as EcsFieldSpec).name !== undefined &&
    (spec as EcsFieldSpec).type !== undefined
  );
}

export function buildSpecJson(spec: EcsNestedSpec): SpecJson {
  const json: SpecJson = {};

  for (const [group, groupSpec] of Object.entries(spec)) {
    set(json, group, { [DESCRIPTION_IDENTIFIER]: groupSpec.description });
    for (const [, fieldSpec] of Object.entries(groupSpec.fields)) {
      set(json, `${fieldSpec.flat_name}.${SPEC_IDENTIFIER}`, fieldSpec);
    }
  }

  return json;
}

export function buildInterfaceProps(i: Interface, groupName: string, groupProps: SpecJson): void {
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
    const description = groupProps.hasOwnProperty(DESCRIPTION_IDENTIFIER)
      ? groupProps[DESCRIPTION_IDENTIFIER] as string
      : '';

    const nextGroupSpecJson = nextGroupProps as SpecJson;
    if (nextGroupSpecJson.hasOwnProperty(SPEC_IDENTIFIER)) {
      // if the next node will be a leaf, skip creating a new interface
      // and attach to the existing one instead
      i.addProperty(nextGroupName, (nextGroupSpecJson[SPEC_IDENTIFIER] as EcsFieldSpec));
      buildInterfaceProps(i, nextGroupName, nextGroupSpecJson);
    } else {
      const nextInterface = new Interface({ name: nextGroupName, description });
      i.addProperty(nextGroupName, nextInterface);
      buildInterfaceProps(nextInterface, nextGroupName, nextGroupSpecJson);
    }
  }
}

export function buildTypes(spec: EcsNestedSpec): Interface[] {
  const json = buildSpecJson(spec);

  const interfaces: Interface[] = [];
  for (const [groupName, groupProps] of Object.entries(json)) {
    if (!isGroupSpec(groupProps) || groupName === BASE_GROUP_NAME) {
      // TODO: Need to handle base / root-level fields
      continue;
    }
    const i = new Interface({ description: groupProps[DESCRIPTION_IDENTIFIER] ?? '', name: groupName });
    buildInterfaceProps(i, groupName, groupProps);
    interfaces.push(i);
  }

  return interfaces;
}
