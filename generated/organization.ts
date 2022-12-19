/**
 * The organization fields enrich data with information about the company or entity the data is associated with.
 * These fields help you arrange or filter data stored in an index by one or multiple organizations.
 */
export interface EcsOrganization {
  /**
   * Unique identifier for the organization.
   */
  id?: string;
  /**
   * Organization name.
   */
  name?: string;
}
