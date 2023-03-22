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

import { TYPE_PREFIX } from '../constants';
import { EcsFieldSpec } from '../types';
import { convertType } from './convert_type';

export class Helpers {
  private static asCamelCase = (str: string) =>
    str.replace(/(\.|_)([a-z])/g, (g: string) => g[`1`].toUpperCase());

  public static asPascalCase = (str: string) => {
    return (
      Helpers.asCamelCase(str).charAt(0).toUpperCase() +
      Helpers.asCamelCase(str).slice(1)
    );
  };

  private static escape(propName: string | undefined) {
    if (!propName) {
      return '';
    }

    if (/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(propName)) {
      return propName;
    } else {
      return `'${propName}'`;
    }
  }

  public buildInterfaceName(name: string, exportInterface = false): string {
    return exportInterface
      ? `export interface ${TYPE_PREFIX}${Helpers.asPascalCase(name)} {\n`
      : `interface ${Helpers.asPascalCase(name)} {\n`;
  }

  public buildDescription(desc: string): string {
    if (!desc.length) {
      return '';
    }
    return `/**\n${desc
      .split('\n')
      .map((line: string) => `* ${line}`)
      .join('\n')}\n*/`;
  }

  public buildInterfacePropString(name: string): string {
    return `  ${name}?: ${Helpers.asPascalCase(name)};\n`;
  }

  public buildFieldPropString(value: EcsFieldSpec) {
    const { required, name, type, normalize } = value;
    const propName = name.split('.').pop();
    const opt = required === true ? `` : `?`;
    return `${this.buildDescription(value.description)}
  ${Helpers.escape(propName)}${opt}: ${convertType(type, normalize)};\n`;
  }
}
