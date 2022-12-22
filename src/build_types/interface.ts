import { Helpers } from './helpers';
import { EcsFieldSpec } from '../types';

const h = new Helpers();

export class Interface {
  description: string;
  name: string;
  properties: Record<string, Interface | EcsFieldSpec>;
  private str: string;

  /**
   * Should this interface be exported at top level?
   */
  reusable: boolean;

  constructor(meta: { name: string; description: string; reusable?: boolean }) {
    this.description = meta.description;
    this.properties = {};
    this.name = meta.name;
    this.str = ``;
    this.reusable = !!meta.reusable;
  }

  addProperty(name: string, value: EcsFieldSpec | Interface): void {
    if (!this.properties.hasOwnProperty(`${name}`)) {
      this.properties[name] = value;
    }
  }

  toString(exportInterface: boolean = true, inline = false): string {
    this.str += h.buildDescription(this.description);

    if (!inline) {
      this.str += `
      ${h.buildInterfaceName(this.name, exportInterface)}`;
    }

    for (const [key, value] of Object.entries(this.properties)) {
      if (this.properties[key] instanceof Interface) {
        this.str += `${key}: {`;
        this.str += this.properties[key].toString(false, true);
      } else {
        this.str += h.buildFieldPropString(value as EcsFieldSpec);
      }
    }
    this.str += `}\n\n`;

    return this.str;
  }
}
