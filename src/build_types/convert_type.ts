// Maps ECS types to TypeScript types
const typeMapping: Record<string, string> = {
  keyword: "string",
  text: "string",
  date: "string",
  constant_keyword: "string",
  float: "number",
  long: "number",
  boolean: "boolean",
};

export function convertType(ecsType: string): string {
  const type = typeMapping[ecsType];
  if (!type) {
    console.error(`Unknown type: ${ecsType}`);
    process.exit(1);
  }
  return type;
}
