import path from 'path';
import fs from 'fs';
import { load } from 'js-yaml';
import { convertType } from './convert_type';

function loadYaml() {
  try {
    const doc = load(fs.readFileSync(path.resolve(__dirname, '../tmp/ecs_nested.yml'), 'utf8'));
    return doc as Record<string, any>;
  } catch (e) {
    console.log(e);
  }
}

function writeFile(filePath: string, content: string) {
  try {
    fs.writeFileSync(path.resolve(__dirname, filePath), content);
  } catch (e) {
    console.log(e);
  }
}

function buildTS(spec: Record<string, any>): string {
  const description = spec?.agent?.description.split('\n').map((line: string) => `// ${line}`);
  return `// ECS types

${description.join('\n')}
export interface Test {
  ${spec.agent.fields['agent.name'].name}?: ${convertType(spec.agent.fields['agent.name'].type)};
}
  `;
}

const spec = loadYaml();
if (!spec) {
  console.error('Failed to load spec from yml');
  process.exit(1);
}

writeFile(path.resolve(__dirname, '../generated/ecs.ts'), buildTS(spec));

process.exit(0);
