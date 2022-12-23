import { EcsInterface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';

describe('interfaceToDefinitionFilename(interface)', () => {
  it('should generate correct names when asked for variants with and without the extension', () => {
    expect(
      interfaceToDefinitionFileName(
        new EcsInterface({ name: 'base', description: '' })
      )
    ).toEqual('base.ts');

    expect(
      interfaceToDefinitionFileName(
        new EcsInterface({ name: 'base', description: '' }),
        false
      )
    ).toEqual('base');
  });
});
