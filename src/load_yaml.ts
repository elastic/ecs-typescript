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

import { load } from 'js-yaml';

import axios from 'axios';

export async function loadYaml(ref: string, yamlFile: string) {
  const url = `https://raw.githubusercontent.com/elastic/ecs/${ref}/generated/ecs/${yamlFile}`;

  const response = await axios.get<string>(url);

  if (response.status !== 200) {
    throw new Error(`Could not fetch ecs spec from ${url}`);
  }

  try {
    const doc = load(response.data);
    return doc as Record<string, unknown>;
  } catch (e) {
    console.error(`Failed to load spec from ${url}`);
    console.error(e);
    process.exit(1);
  }
}
