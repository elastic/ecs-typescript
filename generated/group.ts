/**
 * The group fields are meant to represent groups that are relevant to the event.
 */
export interface EcsGroup {
  /**
   * Name of the directory the group is a member of.
   * For example, an LDAP or Active Directory domain name.
   */
  domain?: string;
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}
