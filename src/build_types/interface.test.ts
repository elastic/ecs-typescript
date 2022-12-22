import { EcsFieldSpec } from '../types';
import { Interface } from './interface';

/**
 * utility to create a test fixture with the following shape:
 * interface A {
   prop_a?: 'keyword';
   prop_b?: PropB;
 }
 interface PropB {
   prop_c: 'keyword';
   prop_d?: PropD;
 }
 interface PropD {
   prop_e?: 'keyword';
   prop_f?: 'keyword';
 }
 */
// @ts-ignore unused
function createInterfaceWithProps(): Interface {
  const interfacesMeta = [
    { name: 'A', description: 'Description of A' },
    { name: 'PropB', description: 'Description of PropB' },
    { name: 'PropD', description: 'Description of PropD' },
  ];
  const defaultFieldProps = (
    name: string,
    type = 'keyword',
    required = false
  ): EcsFieldSpec => ({
    dashed_name: `dash-${name}`,
    description: 'test_prop description',
    example: 'example',
    flat_name: `flat_${name}`,
    level: 'core',
    name: `${name}`,
    normalize: [],
    required,
    short: 'short description',
    type,
    ignore_above: 1024,
  });
  const intfs = interfacesMeta.map(
    (_, index) => new Interface(interfacesMeta[index])
  );
  intfs[0].addProperty('prop_a', defaultFieldProps('prop_a'));
  intfs[0].addProperty('prop_b', intfs[1]);

  intfs[1].addProperty('prop_c', defaultFieldProps('prop_c'));
  intfs[1].addProperty('prop_d', intfs[2]);

  intfs[2].addProperty('prop_e', defaultFieldProps('prop_e'));
  intfs[2].addProperty('prop_f', defaultFieldProps('prop_f'));
  return intfs[0];
}

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
      ignore_above: 100,
    };
  });

  it('builds a simple interface', () => {
    const testMeta = {
      name: 'myinterface',
      description: 'My interface description',
    };
    const testInterface = new Interface(testMeta);
    expect(testInterface instanceof Interface).toBe(true);
  });
  it('allows adding an Interface as a property', () => {
    const testMainInterface = mainInt;
    const testMeta = {
      name: 'myinterface_property',
      description: 'My interface property description',
    };
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
            "reusable": false,
            "str": "",
          },
        },
        "reusable": false,
        "str": "",
      }
    `);
  });
  it('converts an Interface to a string representation', () => {
    const testMainInterface = mainInt;
    const testMeta = {
      name: 'myinterface_property',
      description: 'My interface property description',
    };
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
      type: 'keyword',
    };
    testMainInterface.addProperty(testProp.name, testInterface);
    const intAsString = testMainInterface.toString(true);
    expect(intAsString).toMatchInlineSnapshot(`
      "/**
      * main interface
      */
            export interface EcsMain {
      testProp: {/**
      * My interface property description
      */}

      }

      "
    `);
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
        "reusable": false,
        "str": "",
      }
    `);
  });

  it('converts field meta to a string representation', () => {
    const testMainInterface = mainInt;
    const testMeta = testProp;
    testMainInterface.addProperty(testMeta.name, testMeta);
    const intAsString = testMainInterface.toString(true);
    expect(intAsString).toMatchInlineSnapshot(`
      "/**
      * main interface
      */
            export interface EcsMain {
      /**
      * test_prop description
      */
        test_prop: string;
      }

      "
    `);
  });
  it('writes all dedicated interfaces', () => {
    const cloudInterface = new Interface({
      name: 'cloud',
      description: 'cloud description',
    });
    const availabilityZone: EcsFieldSpec = {
      dashed_name: 'cloud-availability-zone',
      description: 'Availability zone in which this host, ',
      example: 'fus-east-1coo',
      flat_name: 'cloud.availability_zone',
      level: 'extended',
      name: 'availability_zone',
      normalize: [],
      required: false,
      short:
        'Availability zone in which this host, resource, or service is located.',
      type: 'keyword',
      ignore_above: 1024,
    };
    const accountInterface = new Interface({
      name: 'account',
      description: 'account description',
    });
    const accountInterfaceProps: EcsFieldSpec = {
      dashed_name: 'cloud-account-id',
      description:
        'The cloud account or organization id used to identify different\n entities in a multi-tenant environment.',
      example: '666777888999',
      flat_name: 'cloud.account.id',
      level: 'extended',
      name: 'id',
      normalize: [],
      required: false,
      short: 'The cloud account or organization id.',
      type: 'keyword',
      ignore_above: 1024,
    };
    accountInterface.addProperty(
      accountInterfaceProps.name,
      accountInterfaceProps
    );
    cloudInterface.addProperty(availabilityZone.name, availabilityZone);
    cloudInterface.addProperty(accountInterface.name, accountInterface);

    expect(cloudInterface.properties).toStrictEqual(
      expect.objectContaining({
        availability_zone: expect.any(Object),
        account: expect.any(Interface),
      })
    );
    expect(cloudInterface.toString(true)).toMatchInlineSnapshot(`
      "/**
      * cloud description
      */
            export interface EcsCloud {
      /**
      * Availability zone in which this host, 
      */
        availability_zone?: string;
      account: {/**
      * account description
      *//**
      * The cloud account or organization id used to identify different
      *  entities in a multi-tenant environment.
      */
        id?: string;
      }

      }

      "
    `);
    expect(cloudInterface.toString(true)).toMatchInlineSnapshot(`
      "/**
      * cloud description
      */
            export interface EcsCloud {
      /**
      * Availability zone in which this host, 
      */
        availability_zone?: string;
      account: {/**
      * account description
      *//**
      * The cloud account or organization id used to identify different
      *  entities in a multi-tenant environment.
      */
        id?: string;
      }

      }

      /**
      * cloud description
      */
            export interface EcsCloud {
      /**
      * Availability zone in which this host, 
      */
        availability_zone?: string;
      account: {/**
      * account description
      *//**
      * The cloud account or organization id used to identify different
      *  entities in a multi-tenant environment.
      */
        id?: string;
      }

      /**
      * account description
      *//**
      * The cloud account or organization id used to identify different
      *  entities in a multi-tenant environment.
      */
        id?: string;
      }

      }

      "
    `);
  });
});
