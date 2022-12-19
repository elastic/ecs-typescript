import path from 'path';
import { Interface } from './build_types/interface';
import { EXTENSION } from './constants';
import { generateIndex } from './generate_index';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';
import { writeFile } from './write_file';

const ROOT_FILE_NAME = `index${EXTENSION}` as const;

export function outputDefinitions(interfaces: Interface[], outPath: string) {
  for (const ecsInterface of interfaces) {
    const targetPath = path.join(
      outPath,
      interfaceToDefinitionFileName(ecsInterface)
    );

    console.log(`Writing ${ecsInterface.name} to ${targetPath}`);

    writeFile(targetPath, ecsInterface.toString(true));
  }

  writeFile(path.join(outPath, ROOT_FILE_NAME), generateIndex(interfaces));
}
