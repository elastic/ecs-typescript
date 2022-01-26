export function toCamelCase(name:string): string {
  return name.replace(/(\.|_)([a-z])/g, (g:string) => g[1].toUpperCase());
}

export function buildDescription(desc: string): string {
  return desc.split('\n').map((line: string) => `// ${line}`).join('\n');
}

