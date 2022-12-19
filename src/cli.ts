import path from 'path';
import { Command } from 'commander';
import { buildTypes } from './build_types';
import { loadYaml } from './load_yaml';
import { outputDefinitions } from './output_definitions';

interface Options {
  spec: string;
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
      '-s, --spec <path>',
      'path to the ecs_nested.yml spec',
      'tmp/ecs_nested.yml'
    )
    .option(
      '-d, --dir <directory>',
      'directory where the generated file will be written',
      'generated'
    );

  program.parse(argv);

  return program;
}

export function run() {
  const program = initCommand();
  const options = program.opts() as Options;

  const specPath = path.resolve(process.cwd(), options.spec);
  console.log(`Loading ecs_nested.yml from ${specPath}`);
  const spec = loadYaml(specPath);
  if (!spec) {
    console.error(`Failed to load spec from ${options.spec}`);
    process.exit(1);
  }

  const outPath = path.resolve(process.cwd(), options.dir);
  const types = buildTypes(spec);

  outputDefinitions(types, outPath);

  process.exit(0);
}
