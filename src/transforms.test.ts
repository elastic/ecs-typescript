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
import { injectVersion } from './transforms';
import { EcsFieldSpec } from './types';

const testContext = {
  ecsVersionString: 'mock-ecs-version',
  outPath: '',
  ref: '',
};

const testProp: EcsFieldSpec = {
  dashed_name: 'version',
  description: 'version description',
  example: 'example',
  flat_name: 'version',
  level: 'core',
  name: 'version',
  normalize: [],
  required: true,
  short: 'pr',
  type: 'keyword',
  ignore_above: 0,
};

describe('Transforms', () => {
  describe('injectVersion()', () => {
    it('should replace generic version with the one from context if dealing with an ecs group', () => {
      const i = new EcsInterface({ name: 'ecs', description: '' });
      i.addProperty(testProp.name, testProp);

      expect(injectVersion(testContext, i).toString({ exportInterface: true }))
        .toMatchInlineSnapshot(`
        "
              export interface EcsEcs {
        /**
        * version description
        */
          version: \\"mock-ecs-version\\";
        }

        "
      `);
    });

    it('should not affect non-ecs groups', () => {
      const i = new EcsInterface({ name: 'non_ecs', description: '' });
      i.addProperty(testProp.name, testProp);

      expect(injectVersion(testContext, i).toString({ exportInterface: true }))
        .toMatchInlineSnapshot(`
        "
              export interface EcsNonEcs {
        /**
        * version description
        */
          version: string;
        }

        "
      `);
    });
  });
});
