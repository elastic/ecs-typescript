import { Interface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';

import { Helpers } from './build_types/helpers';
import { TYPE_PREFIX } from './constants';

export function generateIndex(interfaces: Interface[]) {
  const reusableInterfaces = interfaces.filter((i) => i.reusable);

  const imports = interfaces
    .map(
      (i) =>
        `import {${TYPE_PREFIX}${Helpers.asPascalCase(
          i.name
        )}} from './${interfaceToDefinitionFileName(i, false)}';`
    )
    .join('\n');

  const exports = interfaces
    .map((i) => `${TYPE_PREFIX}${Helpers.asPascalCase(i.name)}`)
    .join(',\n');

  return `${imports}
  
export type { ${exports} };

  export type ${TYPE_PREFIX} = ${TYPE_PREFIX}Base & ${TYPE_PREFIX}Tracing & {
    ${reusableInterfaces
      .filter((i) => !['base', 'tracing'].includes(i.name))
      .map((i) => interfaceToEcsRootProperty(i))
      .join('\n')}
  }`;
}

function interfaceToEcsRootProperty(i: Interface): string {
  return `${i.name}?: ${TYPE_PREFIX}${Helpers.asPascalCase(i.name)};`;
}
