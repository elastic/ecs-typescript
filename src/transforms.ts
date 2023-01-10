import { EcsInterface } from './build_types/interface';
import { Context } from './types';

type Transform = (
  { ecsVersionString }: Context,
  ecsInterface: EcsInterface
) => EcsInterface;

/**
 * Replaces `version: string;` with an actual ecs release version
 */
export const injectVersion: Transform = (
  { ecsVersionString },
  ecsInterface
) => {
  if (ecsInterface.name !== 'ecs') {
    return ecsInterface;
  }

  return {
    ...ecsInterface,
    toString(options) {
      const output = ecsInterface.toString(options);

      return output.replace(
        'version: string;',
        `version: "${ecsVersionString}";`
      );
    },
  } as EcsInterface;
};
