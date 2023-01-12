import { outputSchema } from './output_schema';
import { writeFile } from './write_file';

jest.mock('./write_file');

describe('outputDefinitions()', () => {
  beforeEach(jest.clearAllMocks);

  it('should call writeFile', () => {
    outputSchema(
      {
        outPath: 'output',
        ref: 'main',
        ecsVersionString: 'main',
      },
      {}
    );

    expect(writeFile).toHaveBeenCalledTimes(1);
    expect(jest.mocked(writeFile).mock.calls[0]).toMatchInlineSnapshot(`
      Array [
        "output/ecs_nested.ts",
        "export const EcsNested = {};",
      ]
    `);
  });
});
