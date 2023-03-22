/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * The user fields describe information about the user that is relevant to the event.
 * Fields can have one entry or multiple entries. If a user has more than one id, provide an array that includes all of them.
 */
export interface EcsUser {
  changes?: {
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
    group?: {
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
    };

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
    roles?: string | Array<string>;
  };

  /**
   * Name of the directory the user is a member of.
   * For example, an LDAP or Active Directory domain name.
   */
  domain?: string;
  effective?: {
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
    group?: {
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
    };

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
    roles?: string | Array<string>;
  };

  /**
   * User email address.
   */
  email?: string;
  /**
   * User's full name, if available.
   */
  full_name?: string;
  group?: {
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
  };

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
  risk?: {
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
  };

  /**
   * Array of user roles at the time of the event.
   */
  roles?: string | Array<string>;
  target?: {
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
    group?: {
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
    };

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
    roles?: string | Array<string>;
  };
}
