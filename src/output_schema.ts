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
import { OUTPUT_EXTENSION, RAW_SCHEMA_FILENAME, TYPE_PREFIX } from './constants';
import { Context } from './types';
import { writeFile } from './write_file';

export function outputSchema(
  { outPath }: Context,
  yamlAsJson: Record<string, unknown>
) {
  writeFile(
    path.join(outPath, `${RAW_SCHEMA_FILENAME}${OUTPUT_EXTENSION}`),
    `export const ${TYPE_PREFIX}Nested = ${JSON.stringify(yamlAsJson)};`
  );
}
