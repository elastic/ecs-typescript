import { toCamelCase, convertAgentFields } from './build_types';

describe('convertAgentFields', () => {
  it('converts agent fields', () => {
    const testItem1: Record<string, any> = {
      'agent.build.original': {
        name: "build.original",
        type: "keyword"
      },
      'agent.ephemeral_id': {
        name: "ephemeral_id",
        type: "keyword"
      },
      'agent.id': {
        name: "id",
        type: "keyword"
      },
      'agent.name': {
        name: "name",
        type: "keyword"
      },
      'agent.type': {
        name: "type",
        type: "keyword"
      },
      'agent.version': {
        name: "version",
        type: "keyword"
      }
    }
    expect(convertAgentFields(testItem1)).toMatchInlineSnapshot(
    `
      "  buildOriginal?: string;
        ephemeralId?: string;
        id?: string;
        name?: string;
        type?: string;
        version?: string;"
      `
    );
  })
});

describe('toCamelCase', () => {
  it('converts keys to camelCase', () => {
    expect(toCamelCase("build.original")).toBe('buildOriginal');
  });
});
