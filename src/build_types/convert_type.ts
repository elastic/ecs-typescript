// Maps ECS types to TypeScript types
const typeMapping: Record<string, string> = {
  keyword: 'string',
  text: 'string',
  date: 'string',
  constant_keyword: 'string',
  float: 'number',
  scaled_float: 'number',
  long: 'number',
  boolean: 'boolean',
  geo_point: '{ lat: number; lon: number }',
  ip: 'string',
  object: 'Record<string, unknown>',
  flattened: 'Record<string, unknown>',
  nested: 'Record<string, unknown>',
  wildcard: 'string',
  match_only_text: 'string',
};

export function convertType(ecsType: string, normalize: string[]): string {
  const type = typeMapping[ecsType];
  if (!type) {
    console.error(`Unknown type: ${ecsType}`);
    process.exit(1);
  }

  const isArray = normalize.includes('array');

  return `${isArray ? `Array<${type}>` : type}`;
}
