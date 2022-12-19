import { Interface } from './build_types/interface';
import { EXTENSION } from './constants';

export function interfaceToDefinitionFileName(
  ecsInterface: Interface,
  withExtension: boolean = true
): string {
  return `${ecsInterface.name.toLowerCase()}${withExtension ? EXTENSION : ''}`;
}
