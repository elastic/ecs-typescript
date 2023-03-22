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

import path from 'path';
import { OUTPUT_EXTENSION, TYPE_PREFIX } from './constants';
import { Context } from './types';
import { writeFile } from './write_file';
import { capitalize, has } from 'lodash';

export interface SchemaFileDescriptor {
  filename: string;
  type: string;
}

export function outputSchemas(
  { outPath }: Context,
  schemas: Record<string, unknown>
): SchemaFileDescriptor[] {
  const output = [];

  for (const name in schemas) {
    if (!has(schemas, name)) {
      continue;
    }

    /**
     * To avoid naming conflicts, we will prepend it with TYPE_PREFIX
     */
    const schemaFilePrefix = `${TYPE_PREFIX.toLowerCase()}_`;

    const filename = `${schemaFilePrefix}${name}`;
    const filenameWithExtension = `${filename}${OUTPUT_EXTENSION}`;
    const type = `${TYPE_PREFIX}${capitalize(name)}`;

    writeFile(
      path.join(outPath, filenameWithExtension),
      `export const ${type} = ${JSON.stringify(schemas[name])};`
    );

    output.push({ filename, type });
  }

  return output;
}
