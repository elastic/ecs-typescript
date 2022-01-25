# @elastic/ecs

Automatically generated TypeScript type definitions for the 
[Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html).

## Local development

1. Install yarn & Node.js
1. Download the latest [ecs_nested.yml](https://github.com/elastic/ecs/raw/main/generated/ecs/ecs_nested.yml) artifact from ECS.
1. Create a new `tmp/` directory and place the `ecs_nested.yml` in it.
1. `yarn build`: Runs `tsc`
1. `yarn dev`: Runs `tsc` and watches for changes
1. `yarn test`: Runs unit tests with `jest`
1. `yarn generate`: Generates a ts file in `generated/ecs.ts`

