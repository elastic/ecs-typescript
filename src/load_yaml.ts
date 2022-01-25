import path from 'path';
import fs from 'fs';
import { load } from 'js-yaml';

export function loadYaml() {
  try {
    const doc = load(fs.readFileSync(path.resolve(__dirname, '../tmp/ecs_nested.yml'), 'utf8'));
    return doc as Record<string, any>;
  } catch (e) {
    console.log(e);
  }
}
