import path from 'path';
import { EcsInterface } from './build_types/interface';
import { INDEX_FILE_NAME } from './constants';
import { generateIndex } from './generate_index';
import { SchemaFileDescriptor } from './output_schemas';
import { Context } from './types';
import { writeFile } from './write_file';

export const outputIndex = (
  ctx: Context,
  ecsInterfaces: EcsInterface[],
  schemaFiles: SchemaFileDescriptor[]
) => {
  writeFile(
    path.join(ctx.outPath, INDEX_FILE_NAME),
    generateIndex(ctx, ecsInterfaces, schemaFiles)
  );
};
