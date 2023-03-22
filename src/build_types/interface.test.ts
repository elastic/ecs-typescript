import { EcsFieldSpec } from '../types';
import { EcsInterface } from './interface';

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
function createInterfaceWithProps(): EcsInterface {
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
    (_, index) => new EcsInterface(interfacesMeta[index])
  );
  intfs[0].addProperty('prop_a', defaultFieldProps('prop_a'));
  intfs[0].addProperty('prop_b', intfs[1]);

  intfs[1].addProperty('prop_c', defaultFieldProps('prop_c'));
  intfs[1].addProperty('prop_d', intfs[2]);

  intfs[2].addProperty('prop_e', defaultFieldProps('prop_e'));
  intfs[2].addProperty('prop_f', defaultFieldProps('prop_f'));
  return intfs[0];
}

describe('EcsInterface', () => {
  let mainInt: EcsInterface;
  let testProp: EcsFieldSpec;
  beforeEach(() => {
    mainInt = createInterfaceWithProps();
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
    const testInterface = new EcsInterface(testMeta);
    expect(testInterface instanceof EcsInterface).toBe(true);
  });
  it('allows adding an Interface as a property', () => {
    const testMainInterface = mainInt;
    const testMeta = {
      name: 'myinterface_property',
      description: 'My interface property description',
    };
    const testInterface = new EcsInterface(testMeta);

    testMainInterface.addProperty(testProp.name, testInterface);

    expect(testMainInterface).toMatchInlineSnapshot(`
      EcsInterface {
        "description": "Description of A",
        "name": "A",
        "properties": Object {
          "prop_a": Object {
            "dashed_name": "dash-prop_a",
            "description": "test_prop description",
            "example": "example",
            "flat_name": "flat_prop_a",
            "ignore_above": 1024,
            "level": "core",
            "name": "prop_a",
            "normalize": Array [],
            "required": false,
            "short": "short description",
            "type": "keyword",
          },
          "prop_b": EcsInterface {
            "description": "Description of PropB",
            "name": "PropB",
            "properties": Object {
              "prop_c": Object {
                "dashed_name": "dash-prop_c",
                "description": "test_prop description",
                "example": "example",
                "flat_name": "flat_prop_c",
                "ignore_above": 1024,
                "level": "core",
                "name": "prop_c",
                "normalize": Array [],
                "required": false,
                "short": "short description",
                "type": "keyword",
              },
              "prop_d": EcsInterface {
                "description": "Description of PropD",
                "name": "PropD",
                "properties": Object {
                  "prop_e": Object {
                    "dashed_name": "dash-prop_e",
                    "description": "test_prop description",
                    "example": "example",
                    "flat_name": "flat_prop_e",
                    "ignore_above": 1024,
                    "level": "core",
                    "name": "prop_e",
                    "normalize": Array [],
                    "required": false,
                    "short": "short description",
                    "type": "keyword",
                  },
                  "prop_f": Object {
                    "dashed_name": "dash-prop_f",
                    "description": "test_prop description",
                    "example": "example",
                    "flat_name": "flat_prop_f",
                    "ignore_above": 1024,
                    "level": "core",
                    "name": "prop_f",
                    "normalize": Array [],
                    "required": false,
                    "short": "short description",
                    "type": "keyword",
                  },
                },
                "reusable": false,
                "root": false,
                "str": "",
              },
            },
            "reusable": false,
            "root": false,
            "str": "",
          },
          "test_prop": EcsInterface {
            "description": "My interface property description",
            "name": "myinterface_property",
            "properties": Object {},
            "reusable": false,
            "root": false,
            "str": "",
          },
        },
        "reusable": false,
        "root": false,
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
    const testInterface = new EcsInterface(testMeta);
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
    const intAsString = testMainInterface.toString({ exportInterface: true });
    expect(intAsString).toMatchInlineSnapshot(`
      "/**
      * Description of A
      */
            export interface EcsA {
      /**
      * test_prop description
      */
        prop_a?: string;
      prop_b?: {/**
      * Description of PropB
      *//**
      * test_prop description
      */
        prop_c?: string;
      prop_d?: {/**
      * Description of PropD
      *//**
      * test_prop description
      */
        prop_e?: string;
      /**
      * test_prop description
      */
        prop_f?: string;
      }

      }

      testProp?: {/**
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
      EcsInterface {
        "description": "Description of A",
        "name": "A",
        "properties": Object {
          "prop_a": Object {
            "dashed_name": "dash-prop_a",
            "description": "test_prop description",
            "example": "example",
            "flat_name": "flat_prop_a",
            "ignore_above": 1024,
            "level": "core",
            "name": "prop_a",
            "normalize": Array [],
            "required": false,
            "short": "short description",
            "type": "keyword",
          },
          "prop_b": EcsInterface {
            "description": "Description of PropB",
            "name": "PropB",
            "properties": Object {
              "prop_c": Object {
                "dashed_name": "dash-prop_c",
                "description": "test_prop description",
                "example": "example",
                "flat_name": "flat_prop_c",
                "ignore_above": 1024,
                "level": "core",
                "name": "prop_c",
                "normalize": Array [],
                "required": false,
                "short": "short description",
                "type": "keyword",
              },
              "prop_d": EcsInterface {
                "description": "Description of PropD",
                "name": "PropD",
                "properties": Object {
                  "prop_e": Object {
                    "dashed_name": "dash-prop_e",
                    "description": "test_prop description",
                    "example": "example",
                    "flat_name": "flat_prop_e",
                    "ignore_above": 1024,
                    "level": "core",
                    "name": "prop_e",
                    "normalize": Array [],
                    "required": false,
                    "short": "short description",
                    "type": "keyword",
                  },
                  "prop_f": Object {
                    "dashed_name": "dash-prop_f",
                    "description": "test_prop description",
                    "example": "example",
                    "flat_name": "flat_prop_f",
                    "ignore_above": 1024,
                    "level": "core",
                    "name": "prop_f",
                    "normalize": Array [],
                    "required": false,
                    "short": "short description",
                    "type": "keyword",
                  },
                },
                "reusable": false,
                "root": false,
                "str": "",
              },
            },
            "reusable": false,
            "root": false,
            "str": "",
          },
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
        "root": false,
        "str": "",
      }
    `);
  });

  it('converts field meta to a string representation', () => {
    const testMainInterface = mainInt;
    const testMeta = testProp;
    testMainInterface.addProperty(testMeta.name, testMeta);
    const intAsString = testMainInterface.toString({ exportInterface: true });
    expect(intAsString).toMatchInlineSnapshot(`
      "/**
      * Description of A
      */
            export interface EcsA {
      /**
      * test_prop description
      */
        prop_a?: string;
      prop_b?: {/**
      * Description of PropB
      *//**
      * test_prop description
      */
        prop_c?: string;
      prop_d?: {/**
      * Description of PropD
      *//**
      * test_prop description
      */
        prop_e?: string;
      /**
      * test_prop description
      */
        prop_f?: string;
      }

      }

      /**
      * test_prop description
      */
        test_prop: string;
      }

      "
    `);
  });
  it('writes all dedicated interfaces', () => {
    const cloudInterface = new EcsInterface({
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
    const accountInterface = new EcsInterface({
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
        account: expect.any(EcsInterface),
      })
    );
    expect(cloudInterface.toString({ exportInterface: true }))
      .toMatchInlineSnapshot(`
      "/**
      * cloud description
      */
            export interface EcsCloud {
      /**
      * Availability zone in which this host, 
      */
        availability_zone?: string;
      account?: {/**
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
    expect(cloudInterface.toString({ exportInterface: true }))
      .toMatchInlineSnapshot(`
      "/**
      * cloud description
      */
            export interface EcsCloud {
      /**
      * Availability zone in which this host, 
      */
        availability_zone?: string;
      account?: {/**
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
      account?: {/**
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
