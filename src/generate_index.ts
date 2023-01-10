import { EcsInterface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';

import { Helpers } from './build_types/helpers';
import { REQUIRED_ROOT_FIELDS, TYPE_PREFIX } from './constants';
import { Context } from './types';

function buildRootTypesUnion(interfaces: EcsInterface[]) {
  const rootInterfaces = interfaces.filter((i) => i.root);

  return rootInterfaces
    .map((i) => `${TYPE_PREFIX}${Helpers.asPascalCase(i.name)} &`)
    .join(' ');
}

function buildImports(interfaces: EcsInterface[]) {
  return interfaces
    .map(
      (i) =>
        `import {${TYPE_PREFIX}${Helpers.asPascalCase(
          i.name
        )}} from './${interfaceToDefinitionFileName(i, false)}';`
    )
    .join('\n');
}

function buildEcsNestedFields(interfaces: EcsInterface[]) {
  const reusableInterfaces = interfaces.filter((i) => i.reusable);

  return reusableInterfaces
    .map((i) => interfaceToEcsRootProperty(i))
    .join('\n');
}

function buildExports(interfaces: EcsInterface[]) {
  return `export type { ${interfaces
    .map((i) => `${TYPE_PREFIX}${Helpers.asPascalCase(i.name)}`)
    .join(',\n')} };`;
}

export function generateIndex(ctx: Context, interfaces: EcsInterface[]) {
  return `${buildImports(interfaces)}

  export const EcsVersion = "${ctx.ecsVersionString}" as const;
  
  ${buildExports(interfaces)}

  export type ${TYPE_PREFIX} = ${buildRootTypesUnion(interfaces)} {
    ${buildEcsNestedFields(interfaces)}
  }`;
}

function interfaceToEcsRootProperty(i: EcsInterface): string {
  const opt = REQUIRED_ROOT_FIELDS.includes(i.name) ? '' : '?';
  return `${i.name}${opt}: ${TYPE_PREFIX}${Helpers.asPascalCase(i.name)};`;
}
