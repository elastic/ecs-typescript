import { outputSchemas } from './output_schemas';
import { writeFile } from './write_file';

jest.mock('./write_file');

describe('outputDefinitions()', () => {
  beforeEach(jest.clearAllMocks);

  it('should call writeFile', () => {
    outputSchemas(
      {
        outPath: 'output',
        ref: 'main',
        ecsVersionString: 'main',
      },
      { nested: {} }
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
