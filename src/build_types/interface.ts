import { convertType } from './convert_type';
import { Helpers } from './helpers';
import { EcsFieldSpec } from '../types';

const h = new Helpers();
export class Interface {
  properties: Record<string, any>;
  description: string;
  name: string;
  str: string;
  
  constructor(meta: { name: string, description: string }) {
    this.description = meta.description;
    this.properties = {};
    this.name = meta.name;
    this.str = ``;
  };
  
  addProperty(name: string, value: EcsFieldSpec | Interface): void {
    if (!this.properties.hasOwnProperty(`${name}`)) {
      this.properties[name] = value;
    }
  };
  
  toInterfaceString(exportInterface: boolean): string {
    this.str += h.buildDescription(this.description);
    this.str += `
    ${h.buildInterfaceName(this.name, true, exportInterface)}`
    
    for (const [key, value] of Object.entries(this.properties)) {
      if (this.properties[key] instanceof Interface) {
        this.str += `${value.name}?: ${Helpers.asPascalCase(value.name)};`; 
      } else {
        const opt = (value.required === true) ? `?` : ``;
        this.str += `${value?.name}${opt}: ${convertType(value?.type)}`
      }
    }
    this.str += `
    }`
    return this.str;
  };
}
