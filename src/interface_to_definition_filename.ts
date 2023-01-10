import { EcsInterface } from './build_types/interface';
import { EXTENSION } from './constants';

export function interfaceToDefinitionFileName(
  ecsInterface: EcsInterface,
  withExtension = true
): string {
  return `${ecsInterface.name.toLowerCase()}${withExtension ? EXTENSION : ''}`;
}
