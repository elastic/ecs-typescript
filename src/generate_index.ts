/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { EcsInterface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';

import { Helpers } from './build_types/helpers';
import { REQUIRED_ROOT_FIELDS, TYPE_PREFIX } from './constants';
import { Context } from './types';
import { SchemaFileDescriptor } from './output_schemas';

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
  const reusableInterfaces = interfaces
    .filter((i) => i.reusable)
    .filter((i) => !i.root);

  return reusableInterfaces
    .map((i) => interfaceToEcsRootProperty(i))
    .join('\n');
}

function buildExports(interfaces: EcsInterface[]) {
  return `export type { ${interfaces
    .map((i) => `${TYPE_PREFIX}${Helpers.asPascalCase(i.name)}`)
    .join(',\n')} };`;
}

export function generateIndex(
  ctx: Context,
  interfaces: EcsInterface[],
  schemaFiles: SchemaFileDescriptor[]
) {
  const schemaFilesExports = ctx.extended
    ? `
  /**
   * Exporting raw schema files for easy programmatic use
   */
  ${schemaFiles
    .map(
      (schemaFile) =>
        `export { ${schemaFile.type} } from './${schemaFile.filename}';`
    )
    .join('')}
`
    : '';

  return `${buildImports(interfaces)}

  export const ${TYPE_PREFIX}Version = "${ctx.ecsVersionString}" as const;

  ${schemaFilesExports}

  ${buildExports(interfaces)}

  export type ${TYPE_PREFIX} = ${buildRootTypesUnion(interfaces)} {
    ${buildEcsNestedFields(interfaces)}
  }`;
}

function interfaceToEcsRootProperty(i: EcsInterface): string {
  const opt = REQUIRED_ROOT_FIELDS.includes(i.name) ? '' : '?';
  return `${i.name}${opt}: ${TYPE_PREFIX}${Helpers.asPascalCase(i.name)};`;
}
