import { EcsInterface } from './build_types/interface';
import { generateIndex } from './generate_index';

describe('generateIndex()', () => {
  it('should turn an array of interfaces into a barrel export file', () => {
    expect(
      generateIndex(
        { ref: 'main', outPath: '', ecsVersionString: 'main' },
        [
          new EcsInterface({ name: 'Base', description: 'Base interface' }),
          new EcsInterface({ name: 'Agent', description: 'Agent interface' }),
        ],

        [{ filename: 'ecs_nested.ts', type: 'EcsNested' }]
      )
    ).toMatchInlineSnapshot(`
      "import {EcsBase} from './base';
      import {EcsAgent} from './agent';

        export const EcsVersion = \\"main\\" as const;
        
        /**
         * Exporting raw schema files for easy programmatic use
         */
        export { EcsNested } from './ecs_nested.ts';

        export type { EcsBase,
      EcsAgent };

        export type Ecs =  {
          
        }"
    `);
  });
});
