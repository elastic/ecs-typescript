import path from 'path';
import { OUTPUT_EXTENSION, TYPE_PREFIX } from './constants';
import { Context } from './types';
import { writeFile } from './write_file';
import { capitalize, has } from 'lodash';

export interface SchemaFileDescriptor {
  filename: string;
  type: string;
}

export function outputSchemas(
  { outPath }: Context,
  schemas: Record<string, unknown>
): SchemaFileDescriptor[] {
  const output = [];

  for (const name in schemas) {
    if (!has(schemas, name)) {
      continue;
    }

    /**
     * To avoid naming conflicts, we will prepend it with TYPE_PREFIX
     */
    const schemaFilePrefix = `${TYPE_PREFIX.toLowerCase()}_`;

    const filename = `${schemaFilePrefix}${name}`;
    const filenameWithExtension = `${filename}${OUTPUT_EXTENSION}`;
    const type = `${TYPE_PREFIX}${capitalize(name)}`;

    writeFile(
      path.join(outPath, filenameWithExtension),
      `export const ${type} = ${JSON.stringify(schemas[name])};`
    );

    output.push({ filename, type });
  }

  return output;
}
