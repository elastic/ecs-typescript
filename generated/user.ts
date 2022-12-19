/**
 * The user fields describe information about the user that is relevant to the event.
 * Fields can have one entry or multiple entries. If a user has more than one id, provide an array that includes all of them.
 */
export interface EcsUser {
  changes?: Changes;
  /**
   * Name of the directory the user is a member of.
   * For example, an LDAP or Active Directory domain name.
   */
  domain?: string;
  effective?: Effective;
  /**
   * User email address.
   */
  email?: string;
  /**
   * User's full name, if available.
   */
  full_name?: string;
  group?: Group;
  /**
   * Unique user hash to correlate information for a user in anonymized form.
   * Useful if `user.id` or `user.name` contain confidential information and cannot be used.
   */
  hash?: string;
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
  risk?: Risk;
  /**
   * Array of user roles at the time of the event.
   */
  roles?: string;
  target?: Target;
}

interface Changes {
  /**
   * Name of the directory the user is a member of.
   * For example, an LDAP or Active Directory domain name.
   */
  domain?: string;
  /**
   * User email address.
   */
  email?: string;
  /**
   * User's full name, if available.
   */
  full_name?: string;
  group?: Group;
  /**
   * Unique user hash to correlate information for a user in anonymized form.
   * Useful if `user.id` or `user.name` contain confidential information and cannot be used.
   */
  hash?: string;
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
  /**
   * Array of user roles at the time of the event.
   */
  roles?: string;
}

interface Group {
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

interface Effective {
  /**
   * Name of the directory the user is a member of.
   * For example, an LDAP or Active Directory domain name.
   */
  domain?: string;
  /**
   * User email address.
   */
  email?: string;
  /**
   * User's full name, if available.
   */
  full_name?: string;
  group?: Group;
  /**
   * Unique user hash to correlate information for a user in anonymized form.
   * Useful if `user.id` or `user.name` contain confidential information and cannot be used.
   */
  hash?: string;
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
  /**
   * Array of user roles at the time of the event.
   */
  roles?: string;
}

interface Group {
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

interface Group {
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

interface Risk {
  /**
   * A risk classification level calculated by an internal system as part of entity analytics and entity risk scoring.
   */
  calculated_level?: string;
  /**
   * A risk classification score calculated by an internal system as part of entity analytics and entity risk scoring.
   */
  calculated_score?: number;
  /**
   * A risk classification score calculated by an internal system as part of entity analytics and entity risk scoring, and normalized to a range of 0 to 100.
   */
  calculated_score_norm?: number;
  /**
   * A risk classification level obtained from outside the system, such as from some external Threat Intelligence Platform.
   */
  static_level?: string;
  /**
   * A risk classification score obtained from outside the system, such as from some external Threat Intelligence Platform.
   */
  static_score?: number;
  /**
   * A risk classification score obtained from outside the system, such as from some external Threat Intelligence Platform, and normalized to a range of 0 to 100.
   */
  static_score_norm?: number;
}

interface Target {
  /**
   * Name of the directory the user is a member of.
   * For example, an LDAP or Active Directory domain name.
   */
  domain?: string;
  /**
   * User email address.
   */
  email?: string;
  /**
   * User's full name, if available.
   */
  full_name?: string;
  group?: Group;
  /**
   * Unique user hash to correlate information for a user in anonymized form.
   * Useful if `user.id` or `user.name` contain confidential information and cannot be used.
   */
  hash?: string;
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
  /**
   * Array of user roles at the time of the event.
   */
  roles?: string;
}

interface Group {
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
