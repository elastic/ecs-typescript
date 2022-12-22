import { EcsNestedSpec } from '../types';
import { buildSpecJson, buildTypes } from './build_types';

const spec = {
  a: {
    description: 'a group description',
    fields: {
      a1: {
        description: 'a1 description',
        // usual flat name, with first segment being "group" name
        flat_name: 'a.a1',
        name: 'a1',
        type: 'long',
      },
      'nested.a2': {
        description: 'a2 description',
        flat_name: 'a.nested.a2',
        name: 'a2',
        type: 'keyword',
      },
    },
  },
  b: {
    description: 'a group description',
    fields: {
      b1: {
        description: 'b1 description',
        // unusual flat name, with first segment not containing "b" (the group name)
        flat_name: 'b1',
        name: 'b1',
        type: 'long',
      },
      'nested.a2': {
        description: 'a2 description',
        flat_name: 'a.nested.a2',
        name: 'a2',
        type: 'keyword',
      },
    },
  },
} as unknown as EcsNestedSpec;

describe('buildSpecJson', () => {
  it('converts the spec to nested json with spec metadata', () => {
    expect(buildSpecJson(spec)).toMatchInlineSnapshot(`
      Object {
        "a": Object {
          "__description": "a group description",
          "__root": false,
          "__top_level": true,
          "a1": Object {
            "__spec": Object {
              "description": "a1 description",
              "flat_name": "a.a1",
              "name": "a1",
              "type": "long",
            },
          },
          "nested": Object {
            "a2": Object {
              "__spec": Object {
                "description": "a2 description",
                "flat_name": "a.nested.a2",
                "name": "a2",
                "type": "keyword",
              },
            },
          },
        },
        "b": Object {
          "__description": "a group description",
          "__root": false,
          "__top_level": true,
          "b1": Object {
            "__spec": Object {
              "description": "b1 description",
              "flat_name": "b1",
              "name": "b1",
              "type": "long",
            },
          },
        },
      }
    `);
  });
});

describe('buildTypes', () => {
  it('returns the expected type string', () => {
    expect(buildTypes(spec)).toMatchInlineSnapshot(`
      Array [
        EcsInterface {
          "description": "a group description",
          "name": "a",
          "properties": Object {
            "a1": Object {
              "description": "a1 description",
              "flat_name": "a.a1",
              "name": "a1",
              "type": "long",
            },
            "nested": EcsInterface {
              "description": "",
              "name": "nested",
              "properties": Object {
                "a2": Object {
                  "description": "a2 description",
                  "flat_name": "a.nested.a2",
                  "name": "a2",
                  "type": "keyword",
                },
              },
              "reusable": false,
              "root": false,
              "str": "",
            },
          },
          "reusable": true,
          "root": false,
          "str": "",
        },
        EcsInterface {
          "description": "a group description",
          "name": "b",
          "properties": Object {
            "b1": Object {
              "description": "b1 description",
              "flat_name": "b1",
              "name": "b1",
              "type": "long",
            },
          },
          "reusable": true,
          "root": false,
          "str": "",
        },
      ]
    `);
  });
});
