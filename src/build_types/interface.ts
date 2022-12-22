import { Helpers } from './helpers';
import { EcsFieldSpec } from '../types';

const h = new Helpers();

export interface EcsInterfaceLike {
  name: string;
  toString(exportInterface: boolean, inline?: boolean): string;
  /**
   * Should this interface be exported
   */
  reusable: boolean;

  /**
   * Flatten this interface at the Ecs root interface instead of doing named export
   */
  root: boolean;
}

export class EcsInterface implements EcsInterfaceLike {
  name: string;
  description: string;
  properties: Record<string, EcsInterface | EcsFieldSpec>;
  private str: string;

  reusable: boolean;
  root: boolean;

  constructor(meta: {
    name: string;
    description: string;
    reusable?: boolean;
    root?: boolean;
  }) {
    this.description = meta.description;
    this.properties = {};
    this.name = meta.name;
    this.str = ``;
    this.reusable = !!meta.reusable;
    this.root = !!meta.root;
  }

  addProperty(name: string, value: EcsFieldSpec | EcsInterface): void {
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
      if (this.properties[key] instanceof EcsInterface) {
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
