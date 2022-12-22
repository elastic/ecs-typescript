import { EcsInterface } from './build_types/interface';
import { generateIndex } from './generate_index';

describe('generateIndex()', () => {
  it('should turn an array of interfaces into a barrel export file', () => {
    expect(
      generateIndex({ ref: 'main', outPath: '', ecsVersionString: 'main' }, [
        new EcsInterface({ name: 'Base', description: 'Base interface' }),
        new EcsInterface({ name: 'Agent', description: 'Agent interface' }),
      ])
    ).toMatchInlineSnapshot(`
      "import {EcsBase} from './base';
      import {EcsAgent} from './agent';

        export const version = \\"main\\" as const;
        
        export type { EcsBase,
      EcsAgent };

        export type Ecs =  {
          
        }"
    `);
  });
});
