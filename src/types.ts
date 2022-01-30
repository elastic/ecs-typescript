/**
 * Represents the top-level structure of the ecs_nested.yml.
 *
 * This is not a full representation of the spec, just some
 * of the fields we care about.
 */
export type EcsNestedSpec = Record<string, EcsGroupSpec>;

/**
 * Metadata for each of the top-level items in the EcsSpec.
 */
export interface EcsGroupSpec {
  description: string;
  fields: Record<string, EcsFieldSpec>;
  footnote?: string;
  group: number;
  prefix: string;
  root?: boolean;
  short: string;
  title: string;
  type: string;
}

/**
 * Metadata for each field in a EcsGroupSpec.
 */
export interface EcsFieldSpec {
  dashed_name: string;
  description: string;
  example: string;
  flat_name: string;
  ignore_above: number;
  level: 'core' | 'extended';
  name: string;
  normalize: string[];
  required?: boolean;
  short: string;
  type: string; // TODO: include string literals
}
