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
import { Command } from 'commander';
import { buildTypes } from './build_types';
import { loadYaml } from './load_yaml';
import { outputDefinitions } from './output_definitions';
import { Context, EcsNestedSpec } from './types';
import { loadVersion } from './load_version';
import { outputSchemas } from './output_schemas';
import { outputIndex } from './output_index';

interface Options {
  ref: string;
  dir: string;
}

function initCommand() {
  const argv = process.argv.slice();
  const program = new Command('bin/generate-ecs-types');

  program
    .version(process.env.npm_package_version || '0.0.0')
    .description(
      'Generate TypeScript type definitions for a given version' +
        'of the Elastic Common Schema (ECS).'
    )
    .option(
      '-r, --ref <ref>',
      'elstic/ecs ref to load ecs_nested.yml spec from',
      'main'
    )
    .option(
      '-d, --dir <directory>',
      'directory where the generated file will be written',
      'generated'
    );

  program.parse(argv);

  return program;
}

const enum EcsVariant {
  Flat = 'flat',
  Nested = 'nested',
}

const loadSchemas = async (
  ref: string,
  variants: EcsVariant[]
): Promise<Record<string, unknown>> => {
  const schemas: Array<[variant: EcsVariant, schema: unknown]> =
    await Promise.all(
      variants.map(async (variant) => [
        variant,
        await loadYaml(ref, `ecs_${variant}.yml`),
      ])
    );

  return schemas.reduce((acc, [variant, schema]) => {
    acc[variant] = schema;
    return acc;
  }, {} as Record<EcsVariant, unknown>);
};

export async function run() {
  const program = initCommand();
  const options = program.opts() as Options;

  const context: Context = {
    outPath: path.resolve(process.cwd(), options.dir),
    ref: options.ref,
    ecsVersionString: await loadVersion(options.ref),
  };

  const schemas = await loadSchemas(options.ref, [
    EcsVariant.Flat,
    EcsVariant.Nested,
  ]);

  const schemaFiles = outputSchemas(context, schemas);

  const types = buildTypes(schemas[EcsVariant.Nested] as EcsNestedSpec);

  outputDefinitions(types, context);

  outputIndex(context, types, schemaFiles);

  process.exit(0);
}
