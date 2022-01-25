import { convertType } from './convert_type';

export function buildTypes(spec: Record<string, any>): string {
  const description = spec?.agent?.description.split('\n').map((line: string) => `// ${line}`);
  return `// ECS types

${description.join('\n')}
export interface Test {
  ${spec.agent.fields['agent.name'].name}?: ${convertType(spec.agent.fields['agent.name'].type)};
}
  `;
}
