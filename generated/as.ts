/**
 * An autonomous system (AS) is a collection of connected Internet Protocol (IP) routing prefixes under the control of one or more network operators on behalf of a single administrative entity or domain that presents a common, clearly defined routing policy to the internet.
 */
export interface EcsAs {
  /**
   * Unique number allocated to the autonomous system. The autonomous system number (ASN) uniquely identifies each network on the Internet.
   */
  number?: number;
  organization?: Organization;
}

interface Organization {
  /**
   * Organization name.
   */
  name?: string;
}
