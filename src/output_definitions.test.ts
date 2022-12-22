import { EcsInterface } from './build_types/interface';
import { outputDefinitions } from './output_definitions';
import { writeFile } from './write_file';

jest.mock('./write_file');

describe('outputDefinitions()', () => {
  beforeEach(jest.clearAllMocks);

  it('should call writeFile', () => {
    outputDefinitions([new EcsInterface({ name: 'base', description: '' })], {
      outPath: 'output',
      ref: 'main',
      ecsVersionString: 'main',
    });

    expect(writeFile).toHaveBeenCalledTimes(2);

    expect(jest.mocked(writeFile).mock.calls[0]).toMatchInlineSnapshot(`
      Array [
        "output/base.ts",
        "
            export interface EcsBase {
      }

      ",
      ]
    `);

    expect(jest.mocked(writeFile).mock.calls[1]).toMatchInlineSnapshot(`
      Array [
        "output/index.ts",
        "import {EcsBase} from './base';

        export const version = \\"main\\" as const;
        
        export type { EcsBase };

        export type Ecs =  {
          
        }",
      ]
    `);
  });
});
