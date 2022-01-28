
import { EcsFieldSpec } from '../types';
import { Interface } from './interface';

describe('Interface', () => {
  let mainInt: Interface;
  let testProp: EcsFieldSpec;
  beforeEach(() => {
    mainInt = new Interface({ name: 'main', description: 'main interface' });
    testProp = {
      dashed_name: 'test_prop',
      description: 'test_prop description',
      example: 'example',
      flat_name: 'test_prop',
      level: 'core',
      name: 'test_prop',
      normalize: [],
      required: true,
      short: 'short description',
      type: 'keyword',
      ignore_above: 100
    };
  });
  
  it('builds a simple interface', () => {
    const testMeta = { name: 'myinterface', description: 'My interface description' };
    const testInterface = new Interface(testMeta);
    expect(testInterface instanceof Interface).toBe(true);
  });
  it('allows adding an Interface as a property', () => {
    const testMainInterface = mainInt;
    const testMeta = { name: 'myinterface_property', description: 'My interface property description' };
    const testInterface = new Interface(testMeta);

    testMainInterface.addProperty(testProp.name, testInterface);
    
    expect(testMainInterface).toMatchInlineSnapshot(`
Interface {
  "description": "main interface",
  "name": "main",
  "properties": Object {
    "test_prop": Interface {
      "description": "My interface property description",
      "name": "myinterface_property",
      "properties": Object {},
      "str": "",
    },
  },
  "str": "",
}
`)
  });
  it('converts an Interface to a string representation', () => {
    const testMainInterface = mainInt;
    const testMeta = { name: 'myinterface_property', description: 'My interface property description' };
    const testInterface = new Interface(testMeta);
    const testProp = {
      dashed_name: 'test_prop',
      description: 'test_prop description',
      example: 'example',
      flat_name: 'test_prop',
      level: 'core',
      name: 'testProp',
      normalize: [],
      required: true,
      short: 'pr',
      type: 'keyword'
    };
    testMainInterface.addProperty(testProp.name, testInterface);
    const intAsString = testMainInterface.toInterfaceString(true);
    expect(intAsString).toMatchInlineSnapshot(`
"// main interface
    export interface EcsMain {
myinterface_property?: MyinterfaceProperty;
    }"
`)
  });
  
  it('allows adding a field spec as a property', () => {
    const testMainInterface = mainInt;
    const testMeta = testProp;
    testMainInterface.addProperty(testProp.name, testMeta);
    
    expect(testMainInterface).toMatchInlineSnapshot(`
Interface {
  "description": "main interface",
  "name": "main",
  "properties": Object {
    "test_prop": Object {
      "dashed_name": "test_prop",
      "description": "test_prop description",
      "example": "example",
      "flat_name": "test_prop",
      "ignore_above": 100,
      "level": "core",
      "name": "test_prop",
      "normalize": Array [],
      "required": true,
      "short": "short description",
      "type": "keyword",
    },
  },
  "str": "",
}
`)
  });
  
  it('converts field meta to a string representation', () => {
    const testMainInterface = mainInt;
    const testMeta = testProp;
    testMainInterface.addProperty(testMeta.name, testMeta);
    const intAsString = testMainInterface.toInterfaceString(true);
    expect(intAsString).toMatchInlineSnapshot(`
"// main interface
    export interface EcsMain {
test_prop?: string
    }"
`)
  })
  
});
