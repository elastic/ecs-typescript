import path from 'path';
import type { EcsInterface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';
import { injectVersion } from './transforms';
import { Context } from './types';
import { writeFile } from './write_file';

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
}
