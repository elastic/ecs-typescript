import path from 'path';
import { Command } from 'commander';
import { buildTypes } from './build_types';
import { loadYaml } from './load_yaml';
import { outputDefinitions } from './output_definitions';

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

export async function run() {
  const program = initCommand();
  const options = program.opts() as Options;

  console.log(`Loading ecs_nested.yml from elastic/ecs@${options.ref}`);

  const ref = await loadYaml(options.ref);

  if (!ref) {
    console.error(`Failed to load spec from ${options.ref}`);
    process.exit(1);
  }

  const outPath = path.resolve(process.cwd(), options.dir);
  const types = buildTypes(ref);

  outputDefinitions(types, outPath);

  process.exit(0);
}
