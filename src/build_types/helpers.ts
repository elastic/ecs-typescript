import { EcsFieldSpec } from '../types';
import { convertType } from './convert_type';

export class Helpers {
  private static asCamelCase = (str: string) =>
    str.replace(/(\.|_)([a-z])/g, (g: string) => g[`1`].toUpperCase());

  public static asPascalCase = (str: string) => {
    return (
      Helpers.asCamelCase(str).charAt(0).toUpperCase() +
      Helpers.asCamelCase(str).slice(1)
    );
  };

  public buildInterfaceName(name: string, exportInterface = false): string {
    return exportInterface
      ? `export interface Ecs${Helpers.asPascalCase(name)} {\n`
      : `interface ${Helpers.asPascalCase(name)} {\n`;
  }

  public buildDescription(desc: string): string {
    return desc
      .split('\n')
      .map((line: string) => `// ${line}`)
      .join('\n');
  }

  public buildInterfacePropString(name: string): string {
    return `${name}?: ${Helpers.asPascalCase(name)};\n`;
  }

  public buildFieldPropString(value: EcsFieldSpec) {
    const { required, name, type } = value;
    const opt = required === true ? `?` : ``;
    return `${name}${opt}: ${convertType(type)};\n`;
  }
}
