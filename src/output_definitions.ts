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
import type { EcsInterface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';
import { injectVersion } from './transforms';
import { Context } from './types';
import { writeFile } from './write_file';

export function outputDefinitions(ecsInterfaces: EcsInterface[], ctx: Context) {
  /**
   * We will support more transforms later on
   */

  for (const ecsInterface of ecsInterfaces) {
    const targetPath = path.join(
      ctx.outPath,
      interfaceToDefinitionFileName(ecsInterface)
    );

    console.log(`Writing ${ecsInterface.name} to ${targetPath}`);

    writeFile(
      targetPath,
      injectVersion(ctx, ecsInterface).toString({ exportInterface: true })
    );
  }
}
