import { Helpers } from './helpers';

describe('Helpers', () => {
  let tester: any;
  beforeEach(() => {
    tester = new Helpers();
  })
  it('exists', () => {
    expect(tester).toBeDefined();
  });
  
  it('builds a root Ecs exported interface name', () => {
    const ti = {name: 'my_interface', isRootLevel: true, exportInterface: true};
    const actual = tester.buildInterfaceName(ti.name,ti.isRootLevel, ti.exportInterface);
    expect(actual).toMatchInlineSnapshot(`
"export interface EcsMyInterface {
"
`)
  });
  
  it('builds a plain explorted interface name', () => {
    const ti = {name: 'my_interface', isRootLevel: false, exportInterface: true};
    const actual = tester.buildInterfaceName(ti.name, ti.isRootLevel, ti.exportInterface);
    expect(actual).toMatchInlineSnapshot(`
"export interface MyInterface {
"
`)
  });
  
  it('builds a plain non-exported interface name', () => {
    const ti = {name: 'my_interface', isRootLevel: false, exportInterface: false};
    const actual = tester.buildInterfaceName(ti.name, ti.isRootLevel, ti.exportInterface);
    expect(actual).toMatchInlineSnapshot(`
"interface MyInterface {
"
`)
  });
  
  it('formats a multiline description string', () => {
    const testDesc =  "The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.\nExamples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken.";
    
    expect(tester.buildDescription(testDesc)).toMatchInlineSnapshot(`
      "// The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.
      // Examples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken."
      `
    )
  });
})
