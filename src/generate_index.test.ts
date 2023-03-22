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
import { generateIndex } from './generate_index';

describe('generateIndex()', () => {
  it('should turn an array of interfaces into a barrel export file', () => {
    expect(
      generateIndex(
        { ref: 'main', outPath: '', ecsVersionString: 'main' },
        [
          new EcsInterface({ name: 'Base', description: 'Base interface' }),
          new EcsInterface({ name: 'Agent', description: 'Agent interface' }),
        ],

        [{ filename: 'ecs_nested.ts', type: 'EcsNested' }]
      )
    ).toMatchInlineSnapshot(`
      "import {EcsBase} from './base';
      import {EcsAgent} from './agent';

        export const EcsVersion = \\"main\\" as const;
        
        /**
         * Exporting raw schema files for easy programmatic use
         */
        export { EcsNested } from './ecs_nested.ts';

        export type { EcsBase,
      EcsAgent };

        export type Ecs =  {
          
        }"
    `);
  });
});
