import path from 'path';
import fs from 'fs';
import { load } from 'js-yaml';

export function loadYaml(specPath: string) {
  try {
    const doc = load(fs.readFileSync(path.resolve(__dirname, '..', specPath), 'utf8'));
    return doc as Record<string, any>;
  } catch (e) {
    console.error(`Failed to load spec from ${specPath}`);
    console.error(e);
    process.exit(1);
  }
}
