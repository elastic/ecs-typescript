import path from 'path';
import { Command } from 'commander';
import { buildTypes } from './build_types';
import { loadYaml } from './load_yaml';
import { writeFile } from './write_file';

interface Options {
  spec: string;
  out: string;
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
      '-o, --out <path>',
      'path where the generated file will be written',
      'generated/ecs.ts'
    );

  program.parse(argv);

  return program;
}

export function run() {
  const program = initCommand();
  const options = program.opts() as Options;

  const spec = loadYaml(options.spec);
  if (!spec) {
    console.error(`Failed to load spec from ${options.spec}`);
    process.exit(1);
  }

  writeFile(path.resolve(__dirname, '..', options.out), buildTypes(spec));

  process.exit(0);
}
