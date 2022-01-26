import { convertType } from './convert_type';
import { Helpers} from './helpers';

const helper = new Helpers();

export function buildTypes(spec: Record<string, any>): string {
  const description = helper.buildDescription(spec?.agent?.description);
  return `// ECS types

${description}
export interface Test {
  ${spec.agent.fields['agent.name'].name}?: ${convertType(spec.agent.fields['agent.name'].type)};
}
  `;
}
