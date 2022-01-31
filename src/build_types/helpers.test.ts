import { EcsFieldSpec } from '../types';
import { Helpers } from './helpers';

describe('Helpers', () => {
  let tester: Helpers;
  
  beforeEach(() => {
    tester = new Helpers();
  });
  
  it('builds a root Ecs exported interface name', () => {
    const actual = tester.buildInterfaceName('my_interface', true);
    expect(actual).toMatchInlineSnapshot(`
"export interface EcsMyInterface {
"
`);
  });
  
  it('builds a plain non-exported interface name', () => {
    const actual = tester.buildInterfaceName('my_interface', false);
    expect(actual).toMatchInlineSnapshot(`
"interface MyInterface {
"
`);
  });
  
  it('formats a multiline description string', () => {
    const testDesc =  "Some realy long\nmultiline description for a property.";
    
    expect(tester.buildDescription(testDesc)).toMatchInlineSnapshot(`
"// Some realy long
// multiline description for a property."
`);
  });
  
  it('builds an interface property string', () => {
    expect(tester.buildInterfacePropString('my_interface')).toMatchInlineSnapshot(`
"  my_interface?: MyInterface;
"
`)
  });
  
  it('builds a field property string', () => {
    const testFieldSpec: EcsFieldSpec = {
      name: 'my_prop',
      type: 'text',
      required: true,
      dashed_name: 'dashed_name',
      description: 'description',
      example: 'example',
      flat_name: 'flat-name',
      level: 'core',
      normalize: [],
      short: 'my-prop',
      ignore_above: 0
    }
    expect(tester.buildFieldPropString(testFieldSpec)).toMatchInlineSnapshot(`
"  my_prop: string;
"
`)
  });
});
