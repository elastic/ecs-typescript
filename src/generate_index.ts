import { Interface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';

export function generateIndex(interfaces: Interface[]) {
  return interfaces
    .map((i) => `export * from './${interfaceToDefinitionFileName(i, false)}';`)
    .join('\n');
}
