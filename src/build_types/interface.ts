import { Helpers } from './helpers';
import { EcsFieldSpec } from '../types';

const h = new Helpers();

export class Interface {
  description: string;
  name: string;
  properties: Record<string, Interface | EcsFieldSpec>;
  private str: string;
  private otherInterfaces: Interface[];

  constructor(meta: { name: string; description: string }) {
    this.description = meta.description;
    this.properties = {};
    this.name = meta.name;
    this.str = ``;
    this.otherInterfaces = [];
  }

  addProperty(name: string, value: EcsFieldSpec | Interface): void {
    if (!this.properties.hasOwnProperty(`${name}`)) {
      this.properties[name] = value;
    }
  }

  toString(exportInterface: boolean = true): string {
    this.str += h.buildDescription(this.description);
    this.str += `
${h.buildInterfaceName(this.name, exportInterface)}`;
    for (const [key, value] of Object.entries(this.properties)) {
      if (this.properties[key] instanceof Interface) {
        this.str += h.buildInterfacePropString(value.name);
        this.otherInterfaces.push(value as Interface);
      } else {
        this.str += h.buildFieldPropString(value as EcsFieldSpec);
      }
    }
    this.str += `}\n\n`;
    this.otherInterfaces.forEach(
      (int: Interface) => (this.str += int.toString(false))
    );
    return this.str;
  }
}
