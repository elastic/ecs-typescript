import { Helpers } from "./helpers";
import { EcsFieldSpec } from "../types";

const h = new Helpers();
export class Interface {
  properties: Record<string, Interface | EcsFieldSpec>;
  description: string;
  name: string;
  str: string;
  otherInterfaces: Interface[];

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

  toInterfaceString(exportInterface: boolean): string {
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
    this.str += `}\n`;
    this.otherInterfaces.forEach(
      (int: Interface) => (this.str += int.toInterfaceString(false))
    );
    return this.str;
  }
}
