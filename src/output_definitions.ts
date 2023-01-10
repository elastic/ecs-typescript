import path from 'path';
import type { EcsInterface } from './build_types/interface';
import { EXTENSION } from './constants';
import { generateIndex } from './generate_index';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';
import { injectVersion } from './transforms';
import { Context } from './types';
import { writeFile } from './write_file';

const ROOT_FILE_NAME = `index${EXTENSION}` as const;

export function outputDefinitions(ecsInterfaces: EcsInterface[], ctx: Context) {
  /**
   * We will support more transforms later on
   */

  for (const ecsInterface of ecsInterfaces) {
    const targetPath = path.join(
      ctx.outPath,
      interfaceToDefinitionFileName(ecsInterface)
    );

    console.log(`Writing ${ecsInterface.name} to ${targetPath}`);

    writeFile(
      targetPath,
      injectVersion(ctx, ecsInterface).toString({ exportInterface: true })
    );
  }

  writeFile(
    path.join(ctx.outPath, ROOT_FILE_NAME),
    generateIndex(ctx, ecsInterfaces)
  );
}
