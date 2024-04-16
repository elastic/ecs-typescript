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
import { outputIndex } from './output_index';
import { writeFile } from './write_file';

jest.mock('./write_file');

describe('outputIndex()', () => {
  beforeEach(jest.clearAllMocks);

  it('should call writeFile', () => {
    outputIndex(
      {
        outPath: 'output',
        ref: 'main',
        ecsVersionString: 'main',
      },
      [new EcsInterface({ name: 'base', description: '' })],
      [{ filename: 'ecs_nested', type: 'nested' }]
    );

    expect(writeFile).toHaveBeenCalledTimes(2);

    expect(jest.mocked(writeFile).mock.calls[1]).toMatchInlineSnapshot(`
      Array [
        "output/extended.ts",
        "import {EcsBase} from './base';

        export const EcsVersion = \\"main\\" as const;

        
        /**
         * Exporting raw schema files for easy programmatic use
         */
        export { nested } from './ecs_nested';


        export type { EcsBase };

        export type Ecs =  {
          
        }",
      ]
    `);
  });
});
