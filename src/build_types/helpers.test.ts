import { Helpers } from './helpers';

describe('Helpers', () => {
  let tester: any;
  beforeEach(() => {
    tester = new Helpers();
  })
  it('exists', () => {
    expect(tester).toBeDefined();
  });
  it('formats a multiline description string', () => {
    const testDesc =  "The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.\nExamples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken.";
    
    expect(tester.buildDescription(testDesc)).toMatchInlineSnapshot(`
      "// The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.
      // Examples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken."
      `
    )
  });
  it('builds a simple interface string', () => {
    const actual = tester.buildInterfaceString('my_interface', { a: 1, b: 2});
    expect(actual).toMatchInlineSnapshot(`
    "export interface EcsMyInterface {
      a?: 1;
      b?: 2;
    }"
    `)
  });
  it('adds to an interface', () => {
    const ti = { name: 'my_interface', properties: { a: 1, b: 2 }, isTopLevel: true };
    const exsistingInterface = tester.buildInterfaceString(ti.name, ti.properties, ti.isTopLevel);
    const expandedInterface = tester.addToInterface(ti, { c: 3 });
    expect(expandedInterface).not.toBe(exsistingInterface);
  })
})
