export class Helpers {
  
  private static asCamelCase = (str: string) => str.replace(/(\.|_)([a-z])/g, (g:string) => g[`1`].toUpperCase());
  
  private static asPascalCase = (str: string) => Helpers.asCamelCase(str).charAt(0).toUpperCase() + Helpers.asCamelCase(str).slice(1)
  
  private buildInterfaceName(name: string, isRootLevel: boolean = false): string {
    return !isRootLevel ? `Ecs${Helpers.asPascalCase(name)}` : Helpers.asPascalCase(name);
  }
  
  public buildDescription(desc: string): string {
    return desc.split('\n').map((line: string) => `// ${line}`).join('\n');
  }
  
  public buildInterfaceString(name: string, props: Record<string, string> = {}, isTopLevel:boolean = false) {
    const interfaceName = this.buildInterfaceName(name, isTopLevel);
    const extraProperties = Object.entries(props).map(([key, val]) => `  ${key}?: ${val};`).join('\n');
    return `export interface ${interfaceName} {\n${extraProperties}\n}`
  }
  
  public buildSimpleType(name: string, type: any) {
    return `export type ${name.charAt(0).toUpperCase() + name.slice(1)} = ${type}`
  }
  
  public addToInterface(target: Record<string, any>, prop: Record<string, any>) {
    const newInterface = { name: target.name, properties: { ...target.properties, ...prop}};
    return this.buildInterfaceString(newInterface.name, newInterface.properties, target.isTopLevel);
  }
}
