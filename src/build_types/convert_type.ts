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

// Maps ECS types to TypeScript types
const typeMapping: Record<string, string> = {
  keyword: 'string',
  text: 'string',
  date: 'string',
  constant_keyword: 'string',
  float: 'number',
  scaled_float: 'number',
  long: 'number',
  boolean: 'boolean',
  geo_point: '{ lat: number; lon: number }',
  ip: 'string',
  object: 'Record<string, unknown>',
  flattened: 'Record<string, unknown>',
  nested: 'Record<string, unknown>',
  wildcard: 'string',
  match_only_text: 'string',
};

export function convertType(ecsType: string, normalize: string[]): string {
  const type = typeMapping[ecsType];
  if (!type) {
    console.error(`Unknown type: ${ecsType}`);
    process.exit(1);
  }

  const addArrayBraces = normalize.includes('array');

  const orArrayOfType = addArrayBraces ? ` | Array<${type}>` : '';

  return `${type}${orArrayOfType}`;
}
