import path from 'path';
import { EXTENSION, RAW_SCHEMA_FILENAME, TYPE_PREFIX } from './constants';
import { Context } from './types';
import { writeFile } from './write_file';

export function outputSchema(
  { outPath }: Context,
  yamlAsJson: Record<string, unknown>
) {
  writeFile(
    path.join(outPath, `${RAW_SCHEMA_FILENAME}${EXTENSION}`),
    `export const ${TYPE_PREFIX}Nested = ${JSON.stringify(yamlAsJson)};`
  );
}
