import { convertType } from './convert_type';

export function buildTypes(spec: Record<string, any>): string {
  const description = spec?.agent?.description.split('\n').map((line: string) => `// ${line}`);
  const agentEcs = convertAgentFields(spec?.agent?.fields);
  
  return (`// ECS types

${description.join('\n')}
export interface Agent {
${agentEcs}
}

export interface Test {
  agent: Agent
}
  `);
}

export function convertAgentFields(agentFields: Record<string, any>): unknown {
  const convertedNameTypes = [];
  for (const [, value] of Object.entries(agentFields)) {
    convertedNameTypes.push(`  ${toCamelCase(value.name)}?: ${convertType(value.type)};`)
  }
  return convertedNameTypes.join('\n');
}

export function toCamelCase(name:string): string {
  return name.replace(/(\.|_)([a-z])/g, (g:string) => g[1].toUpperCase());
}
