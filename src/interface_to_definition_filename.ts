import { EcsInterfaceLike } from './build_types/interface';
import { EXTENSION } from './constants';

export function interfaceToDefinitionFileName(
  ecsInterface: EcsInterfaceLike,
  withExtension: boolean = true
): string {
  return `${ecsInterface.name.toLowerCase()}${withExtension ? EXTENSION : ''}`;
}
