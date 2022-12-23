import { Helpers } from './helpers';
import { EcsFieldSpec } from '../types';
import { has } from 'lodash';

const h = new Helpers();

interface ToStringOptions {
  exportInterface: boolean;
  inline?: boolean;
}

export class EcsInterface implements EcsInterface {
  name: string;
  description: string;
  properties: Record<string, EcsInterface | EcsFieldSpec>;
  private str: string;

  /**
   * Should this interface be exported
   */
  reusable: boolean;

  /**
   * Flatten this interface at the Ecs root interface instead of doing named export
   */
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
    if (!has(this.properties, `${name}`)) {
      this.properties[name] = value;
    }
  }

  toString(options: ToStringOptions): string {
    this.str += h.buildDescription(this.description);

    if (!options.inline) {
      this.str += `
      ${h.buildInterfaceName(this.name, options.exportInterface)}`;
    }

    for (const [key, value] of Object.entries(this.properties)) {
      if (this.properties[key] instanceof EcsInterface) {
        this.str += `${key}: {`;
        this.str += this.properties[key].toString({
          inline: true,
          exportInterface: false,
        });
      } else {
        this.str += h.buildFieldPropString(value as EcsFieldSpec);
      }
    }
    this.str += `}\n\n`;

    return this.str;
  }
}
