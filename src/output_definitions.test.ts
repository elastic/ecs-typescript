import { Interface } from './build_types/interface';
import { outputDefinitions } from './output_definitions';
import { writeFile } from './write_file';

jest.mock('./write_file');

describe('outputDefinitions()', () => {
  beforeEach(jest.clearAllMocks);

  it('should call writeFile', () => {
    outputDefinitions(
      [new Interface({ name: 'base', description: '' })],
      'output'
    );

    expect(writeFile).toHaveBeenCalledTimes(2);

    expect(jest.mocked(writeFile).mock.calls[0]).toMatchInlineSnapshot(`
      Array [
        "output/base.d.ts",
        "
            export interface EcsBase {
      }

      ",
      ]
    `);

    expect(jest.mocked(writeFile).mock.calls[1]).toMatchInlineSnapshot(`
      Array [
        "output/index.d.ts",
        "import {EcsBase} from './base';
        
      export type { EcsBase };

        export type Ecs = EcsBase & EcsTracing & {
          
        }",
      ]
    `);
  });
});
