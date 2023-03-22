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

import { EcsFieldSpec } from '../types';
import { Helpers } from './helpers';

describe('Helpers', () => {
  let tester: Helpers;

  beforeEach(() => {
    tester = new Helpers();
  });

  it('builds a root Ecs exported interface name', () => {
    const actual = tester.buildInterfaceName('my_interface', true);
    expect(actual).toMatchInlineSnapshot(`
"export interface EcsMyInterface {
"
`);
  });

  it('builds a plain non-exported interface name', () => {
    const actual = tester.buildInterfaceName('my_interface', false);
    expect(actual).toMatchInlineSnapshot(`
"interface MyInterface {
"
`);
  });

  it('formats a multiline description string', () => {
    const testDesc = 'Some realy long\nmultiline description for a property.';

    expect(tester.buildDescription(testDesc)).toMatchInlineSnapshot(`
"/**
* Some realy long
* multiline description for a property.
*/"
`);
  });

  it('builds an interface property string', () => {
    expect(tester.buildInterfacePropString('my_interface'))
      .toMatchInlineSnapshot(`
"  my_interface?: MyInterface;
"
`);
  });

  it('builds a field property string', () => {
    const testFieldSpec: EcsFieldSpec = {
      name: 'my_prop',
      type: 'text',
      required: true,
      dashed_name: 'dashed_name',
      description: 'description',
      example: 'example',
      flat_name: 'flat-name',
      level: 'core',
      normalize: [],
      short: 'my-prop',
      ignore_above: 0,
    };
    expect(tester.buildFieldPropString(testFieldSpec)).toMatchInlineSnapshot(`
"/**
* description
*/
  my_prop: string;
"
`);
  });

  it("wraps fields containing '@' with single quotes", () => {
    const testFieldSpec: EcsFieldSpec = {
      name: '@my_prop',
      type: 'text',
      required: true,
      dashed_name: 'dashed_name',
      description: 'description',
      example: 'example',
      flat_name: 'flat-name',
      level: 'core',
      normalize: [],
      short: 'my-prop',
      ignore_above: 0,
    };
    expect(tester.buildFieldPropString(testFieldSpec)).toMatchInlineSnapshot(`
"/**
* description
*/
  '@my_prop': string;
"
`);
  });
});
