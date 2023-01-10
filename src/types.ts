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
export type EcsGroupSpec = {
  description: string;
  fields: Record<string, EcsFieldSpec>;
  footnote?: string;
  group: number;
  prefix: string;
  root?: boolean;
  short: string;
  title: string;
  type: string;
  reusable?: {
    top_level: boolean;
  };
};

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

/**
 * Program context
 */
export interface Context {
  outPath: string;
  ref: string;
  /**
   * The actual version string stored in the ECS repository
   */
  ecsVersionString: string;
}
