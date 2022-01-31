import { EcsNestedSpec } from '../types';
import { buildSpecJson, buildTypes } from './build_types';

const spec = ({
  a: {
    description: 'a group description',
    fields: {
      a1: {
        description: 'a1 description',
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
  }
} as unknown) as EcsNestedSpec;

describe('buildSpecJson', () => {
  it('converts the spec to nested json with spec metadata', () => {
    expect(buildSpecJson(spec)).toMatchInlineSnapshot(`
Object {
  "a": Object {
    "__description": "a group description",
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
}
`);
  });
});

describe('buildTypes', () => {
  it('returns the expected type string', () => {
    expect(buildTypes(spec)).toMatchInlineSnapshot(`
Array [
  Interface {
    "description": "a group description",
    "name": "a",
    "otherInterfaces": Array [],
    "properties": Object {
      "a1": Object {
        "description": "a1 description",
        "flat_name": "a.a1",
        "name": "a1",
        "type": "long",
      },
      "nested": Interface {
        "description": "a group description",
        "name": "nested",
        "otherInterfaces": Array [],
        "properties": Object {
          "a2": Object {
            "description": "a2 description",
            "flat_name": "a.nested.a2",
            "name": "a2",
            "type": "keyword",
          },
        },
        "str": "",
      },
    },
    "str": "",
  },
]
`);
  });
});
