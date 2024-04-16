# @elastic/ecs

Automatically generated TypeScript type definitions for the
[Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html).

When run, this program will fetch the ECS schema from the `elastic/ecs` repository. Defaults to `main` ref,
can be overridden with `--ref` flag.

## Local development

1. Install yarn & Node.js
1. `yarn build`: Runs `tsc`
1. `yarn dev`: Runs `tsc` and watches for changes
1. `yarn test`: Runs unit tests with `jest`
1. `yarn generate-ecs-types`: Generates a ts file in `generated/ecs.ts`

## Entrypoints

`@elastic/ecs` only exports ecs-based type definitions and an `EcsVersion` constant.

`@elatic/ecs/extended` contains both type definitions _and_ the `EcsFlat` object, that contains the entire schema parsed as object literal. This can be used for advanced validation scenarios.
