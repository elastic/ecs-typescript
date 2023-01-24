import { EcsInterface } from './build_types/interface';
import { outputIndex } from './output_index';
import { writeFile } from './write_file';

jest.mock('./write_file');

describe('outputIndex()', () => {
  beforeEach(jest.clearAllMocks);

  it('should call writeFile', () => {
    outputIndex(
      {
        outPath: 'output',
        ref: 'main',
        ecsVersionString: 'main',
      },
      [new EcsInterface({ name: 'base', description: '' })],
      [{ filename: 'ecs_nested', type: 'nested' }]
    );

    expect(writeFile).toHaveBeenCalledTimes(1);

    expect(jest.mocked(writeFile).mock.calls[1]).toMatchInlineSnapshot(
      `undefined`
    );
  });
});
