export class Helpers {
  
  private static asCamelCase = (str: string) => str.replace(/(\.|_)([a-z])/g, (g:string) => g[`1`].toUpperCase());
  
  public static asPascalCase = (str: string) => {
    return Helpers.asCamelCase(str).charAt(0).toUpperCase() + Helpers.asCamelCase(str).slice(1)
  }
  
  public buildInterfaceName(name: string, isRootLevel: boolean = false, exportInterface = false): string {
    let interfaceNameString = isRootLevel ? `interface Ecs${Helpers.asPascalCase(name)} {\n` : `interface ${Helpers.asPascalCase(name)} {\n`;
    if (exportInterface === true) {
      return `export ${interfaceNameString}`
    } else {
      return interfaceNameString;
    }
  }
  
  public buildDescription(desc: string): string {
    return desc.split('\n').map((line: string) => `// ${line}`).join('\n');
  }
}
