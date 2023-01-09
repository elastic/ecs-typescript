import { Interface } from './build_types/interface';
import { generateIndex } from './generate_index';

describe('generateIndex()', () => {
  it('should turn an array of interfaces into a barrel export file', () => {
    expect(
      generateIndex([
        new Interface({ name: 'Base', description: 'Base interface' }),
        new Interface({ name: 'Agent', description: 'Agent interface' }),
      ])
    ).toMatchInlineSnapshot(`
      "import {EcsBase} from './base';
      import {EcsAgent} from './agent';
        
        export type { EcsBase,
      EcsAgent };

        export type Ecs =  {
          
        }"
    `);
  });
});
