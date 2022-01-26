import { convertType } from './convert_type';
import { toCamelCase, buildDescription} from './utils';

export function buildTypes(spec: Record<string, any>): string {
  const agentDesc = buildDescription(spec?.agent?.description)
  const agentEcs = convertAgentFields(spec?.agent?.fields);
  
  return (`// ECS types

${agentDesc}
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
