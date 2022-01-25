import path from 'path';
import { buildTypes } from './build_types';
import { loadYaml } from './load_yaml';
import { writeFile } from './write_file';

const spec = loadYaml();
if (!spec) {
  console.error('Failed to load spec from yml');
  process.exit(1);
}

writeFile(path.resolve(__dirname, '../generated/ecs.ts'), buildTypes(spec));

process.exit(0);
