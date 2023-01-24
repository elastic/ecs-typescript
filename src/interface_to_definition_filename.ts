import { EcsInterface } from './build_types/interface';
import { OUTPUT_EXTENSION } from './constants';

export function interfaceToDefinitionFileName(
  ecsInterface: EcsInterface,
  withExtension = true
): string {
  return `${ecsInterface.name.toLowerCase()}${
    withExtension ? OUTPUT_EXTENSION : ''
  }`;
}
