import path from 'path';
import type { EcsInterfaceLike } from './build_types/interface';
import { EXTENSION } from './constants';
import { generateIndex } from './generate_index';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';
import { Context } from './types';
import { writeFile } from './write_file';

const ROOT_FILE_NAME = `index${EXTENSION}` as const;

/**
 * Replaces `version: string;` with actual ecs release version
 */
const injectVersion =
  ({ ecsVersionString }: Context) =>
  (ecsInterface: EcsInterfaceLike): EcsInterfaceLike => {
    if (ecsInterface.name !== 'ecs') {
      return ecsInterface;
    }

    return {
      ...ecsInterface,
      toString(exportInterface, inline) {
        const output = ecsInterface.toString(exportInterface, inline);

        return output.replace(
          'version: string;',
          `version: "${ecsVersionString}";`
        );
      },
    };
  };

export function outputDefinitions(
  ecsInterfaces: EcsInterfaceLike[],
  ctx: Context
) {
  /**
   * We will support more transforms later on
   */
  const process = injectVersion(ctx);

  for (const ecsInterface of ecsInterfaces) {
    const targetPath = path.join(
      ctx.outPath,
      interfaceToDefinitionFileName(ecsInterface)
    );

    console.log(`Writing ${ecsInterface.name} to ${targetPath}`);

    writeFile(targetPath, process(ecsInterface).toString(true));
  }

  writeFile(
    path.join(ctx.outPath, ROOT_FILE_NAME),
    generateIndex(ctx, ecsInterfaces)
  );
}
