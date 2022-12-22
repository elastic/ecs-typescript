import { Interface } from './build_types/interface';
import { interfaceToDefinitionFileName } from './interface_to_definition_filename';

describe('interfaceToDefinitionFilename(interface)', () => {
  it('should generate correct names when asked for variants with and without the extension', () => {
    expect(
      interfaceToDefinitionFileName(
        new Interface({ name: 'Base', description: '' })
      )
    ).toEqual('base.d.ts');

    expect(
      interfaceToDefinitionFileName(
        new Interface({ name: 'Base', description: '' }),
        false
      )
    ).toEqual('base');
  });
});
