// Maps ECS types to TypeScript types
const typeMapping: Record<string, string> = {
  keyword: 'string',
  long: 'number',
  date: 'string',
};

export function convertType(ecsType: string): string {
  const type = typeMapping[ecsType];
  if (!type) {
    console.error(`Unknown type: ${ecsType}`);
    process.exit(1);
  }
  return type;
}
