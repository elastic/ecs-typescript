import { EcsInterface } from './build_types/interface';
import { injectVersion } from './transforms';
import { EcsFieldSpec } from './types';

const testContext = {
  ecsVersionString: 'mock-ecs-version',
  outPath: '',
  ref: '',
};

const testProp: EcsFieldSpec = {
  dashed_name: 'version',
  description: 'version description',
  example: 'example',
  flat_name: 'version',
  level: 'core',
  name: 'version',
  normalize: [],
  required: true,
  short: 'pr',
  type: 'keyword',
  ignore_above: 0,
};

describe('Transforms', () => {
  describe('injectVersion()', () => {
    it('should replace generic version with the one from context if dealing with an ecs group', () => {
      const i = new EcsInterface({ name: 'ecs', description: '' });
      i.addProperty(testProp.name, testProp);

      expect(injectVersion(testContext, i).toString({ exportInterface: true }))
        .toMatchInlineSnapshot(`
        "
              export interface EcsEcs {
        /**
        * version description
        */
          version: \\"mock-ecs-version\\";
        }

        "
      `);
    });

    it('should not affect non-ecs groups', () => {
      const i = new EcsInterface({ name: 'non_ecs', description: '' });
      i.addProperty(testProp.name, testProp);

      expect(injectVersion(testContext, i).toString({ exportInterface: true }))
        .toMatchInlineSnapshot(`
        "
              export interface EcsNonEcs {
        /**
        * version description
        */
          version: string;
        }

        "
      `);
    });
  });
});
