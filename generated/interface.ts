/**
 * The interface fields are used to record ingress and egress interface information when reported by an observer (e.g. firewall, router, load balancer) in the context of the observer handling a network connection.  In the case of a single observer interface (e.g. network sensor on a span port) only the observer.ingress information should be populated.
 */
export interface EcsInterface {
  /**
   * Interface alias as reported by the system, typically used in firewall implementations for e.g. inside, outside, or dmz logical interface naming.
   */
  alias?: string;
  /**
   * Interface ID as reported by an observer (typically SNMP interface ID).
   */
  id?: string;
  /**
   * Interface name as reported by the system.
   */
  name?: string;
}
