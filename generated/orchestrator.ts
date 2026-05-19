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
 * Fields that describe the resources which container orchestrators manage or act upon.
 */
export interface EcsOrchestrator {
  /**
   * API version being used to carry out the action
   */
  api_version?: string;
  cluster?: {
    /**
     * Unique ID of the cluster.
     */
    id?: string;
    /**
     * Name of the cluster.
     */
    name?: string;
    /**
     * URL of the API used to manage the cluster.
     */
    url?: string;
    /**
     * The version of the cluster.
     */
    version?: string;
  };

  entity?: {
    attributes?: {
      /**
       * Known redirect URIs or URLs associated with this entity. Typically applicable to Service entities.
       */
      known_redirects?: string | Array<string>;
      /**
       * Indicates whether the entity is managed by an external administration or control system. Typically applicable to Host and Service entities.
       */
      managed?: boolean;
      /**
       * Indicates whether multi-factor authentication is enabled for this entity. Typically applicable to User entities.
       */
      mfa_enabled?: boolean;
      /**
       * Restriction applied to OAuth consent for this entity (for example `admin_only`, `verified_only`, `unrestricted`). Typically applicable to Service entities.
       */
      oauth_consent_restriction?: string;
      /**
       * Action-level permissions associated with this entity (not roles or groups). Typically applicable to User, Host, and Service entities.
       */
      permissions?: string | Array<string>;
      /**
       * The storage tier or class assigned to an object storage resource (for example S3/GCS/Azure object tiers). Common examples include `STANDARD`, `STANDARD_IA`, `GLACIER`, `COLDLINE`. Typically applicable to Service entities.
       */
      storage_class?: string;
    };

    /**
     * A set of ephemeral characteristics of the entity, derived from observed behaviors during a specific time period. Usually boolean field data type. Use this field set when you need to capture and track ephemeral characteristics of an entity for advanced searching, correlation of normalized values across different providers/sources and entity types.
     */
    behavior?: Record<string, unknown>;
    /**
     * An optional field used when a pretty name is desired for entity-centric operations. This field should not be used for correlation with `*.name` fields for entities with dedicated field sets (for example, `host`).
     */
    display_name?: string;
    /**
     * A unique identifier for the entity. When multiple identifiers exist, this should be the most stable and commonly used identifier that: 1) persists across the entity's lifecycle, 2) ensures uniqueness within its scope, 3) is commonly used for queries and correlation, and 4) is readily available in most observations (logs/events). For entities with dedicated field sets (for example, host, user), this value should match the corresponding *.id field. Alternative identifiers (for example, ARNs values in AWS, URLs) can be preserved in the raw field.
     */
    id?: string;
    /**
     * Indicates the date/time when this entity was last "seen," usually based upon the last event/log that is initiated by this entity.
     */
    last_seen_timestamp?: string;
    lifecycle?: {
      /**
       * Timestamp of the most recent action performed by or attributed to this entity (active use). Distinct from `entity.last_seen_timestamp`, which records when the entity was last observed in data; `last_activity` implies the entity was active, not only seen. Typically applicable to User, Host, and Service entities.
       */
      last_activity?: string;
    };

    /**
     * Field set for any fields containing numeric entity metrics. These use dynamic field data type mapping.
     */
    metrics?: Record<string, unknown>;
    /**
     * The name of the entity. The keyword field enables exact matches for filtering and aggregations, while the text field enables full-text search. For entities with dedicated field sets (for example, `host`), this field should mirrors the corresponding *.name value.
     */
    name?: string;
    /**
     * Original, unmodified fields from the source system. Usually flattened field data type. While the attributes field should be used for normalized fields requiring advanced queries, this field preserves all source metadata with basic search capabilities.
     */
    raw?: Record<string, unknown>;
    /**
     * A URI, URL, or other direct reference to access or locate the entity in its source system. This could be an API endpoint, web console URL, or other addressable location. Format can vary by entity type and source system.
     */
    reference?: string;
    relationships?: {
      administers?: {
        entity?: {
          /**
           * Identifiers of referenced entities, using the same meaning as root `entity.id` (stable id for correlation within scope).
           */
          id?: string | Array<string>;
        };

        host?: {
          /**
           * Referenced host ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced host names.
           */
          name?: string | Array<string>;
        };

        service?: {
          /**
           * Referenced service ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced service names.
           */
          name?: string | Array<string>;
        };

        user?: {
          /**
           * Referenced user directory or AD/LDAP domain names (same semantics as ECS `user.domain`).
           */
          domain?: string | Array<string>;
          /**
           * Referenced user email addresses.
           */
          email?: string | Array<string>;
          /**
           * Referenced user ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced user short names or logins.
           */
          name?: string | Array<string>;
        };
      };

      depends_on?: {
        entity?: {
          /**
           * Identifiers of referenced entities, using the same meaning as root `entity.id` (stable id for correlation within scope).
           */
          id?: string | Array<string>;
        };

        host?: {
          /**
           * Referenced host ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced host names.
           */
          name?: string | Array<string>;
        };

        service?: {
          /**
           * Referenced service ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced service names.
           */
          name?: string | Array<string>;
        };

        user?: {
          /**
           * Referenced user directory or AD/LDAP domain names (same semantics as ECS `user.domain`).
           */
          domain?: string | Array<string>;
          /**
           * Referenced user email addresses.
           */
          email?: string | Array<string>;
          /**
           * Referenced user ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced user short names or logins.
           */
          name?: string | Array<string>;
        };
      };

      owns?: {
        entity?: {
          /**
           * Identifiers of referenced entities, using the same meaning as root `entity.id` (stable id for correlation within scope).
           */
          id?: string | Array<string>;
        };

        host?: {
          /**
           * Referenced host ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced host names.
           */
          name?: string | Array<string>;
        };

        service?: {
          /**
           * Referenced service ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced service names.
           */
          name?: string | Array<string>;
        };

        user?: {
          /**
           * Referenced user directory or AD/LDAP domain names (same semantics as ECS `user.domain`).
           */
          domain?: string | Array<string>;
          /**
           * Referenced user email addresses.
           */
          email?: string | Array<string>;
          /**
           * Referenced user ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced user short names or logins.
           */
          name?: string | Array<string>;
        };
      };

      supervises?: {
        entity?: {
          /**
           * Identifiers of referenced entities, using the same meaning as root `entity.id` (stable id for correlation within scope).
           */
          id?: string | Array<string>;
        };

        host?: {
          /**
           * Referenced host ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced host names.
           */
          name?: string | Array<string>;
        };

        service?: {
          /**
           * Referenced service ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced service names.
           */
          name?: string | Array<string>;
        };

        user?: {
          /**
           * Referenced user directory or AD/LDAP domain names (same semantics as ECS `user.domain`).
           */
          domain?: string | Array<string>;
          /**
           * Referenced user email addresses.
           */
          email?: string | Array<string>;
          /**
           * Referenced user ids.
           */
          id?: string | Array<string>;
          /**
           * Referenced user short names or logins.
           */
          name?: string | Array<string>;
        };
      };
    };

    /**
     * The module or integration that provided this entity data (similar to event.module).
     */
    source?: string;
    /**
     * The specific type designation for the entity as defined by its provider or system. This field provides more granular classification than the type field. Examples: `aws_s3_bucket`, `gcp_cloud_storage_bucket`, `azure_blob_container` would all map to entity type `bucket`.  `hardware` , `virtual` , `container` , `node` , `cloud_instance` would all map to entity type `host`.
     */
    sub_type?: string;
    /**
     * A standardized high-level classification of the entity. This provides a normalized way to group similar entities across different providers or systems. Example values: `bucket`, `database`, `container`, `function`, `queue`, `host`, `user`, `application`, `session`, `cloud`, `orchestrator`, etc. If an entity is nested under a top-level namespace like `host` or `cloud`, or similar, its type array should include the matching value — for example, `host` or `cloud`.
     */
    type?: string | Array<string>;
  };

  /**
   * Namespace in which the action is taking place.
   */
  namespace?: string;
  /**
   * Organization affected by the event (for multi-tenant orchestrator setups).
   */
  organization?: string;
  resource?: {
    /**
     * The list of annotations added to the resource.
     */
    annotation?: string | Array<string>;
    /**
     * Unique ID of the resource being acted upon.
     */
    id?: string;
    /**
     * IP address assigned to the resource associated with the event being observed. In the case of a Kubernetes Pod, this array would contain only one element: the IP of the Pod (as opposed to the Node on which the Pod is running).
     */
    ip?: string | Array<string>;
    /**
     * The list of labels added to the resource.
     */
    label?: string | Array<string>;
    /**
     * Name of the resource being acted upon.
     */
    name?: string;
    parent?: {
      /**
       * Type or kind of the parent resource associated with the event being observed. In Kubernetes, this will be the name of a built-in workload resource (e.g., Deployment, StatefulSet, DaemonSet).
       */
      type?: string;
    };

    /**
     * Type of resource being acted upon.
     */
    type?: string;
  };

  /**
   * Orchestrator cluster type (e.g. kubernetes, nomad or cloudfoundry).
   */
  type?: string;
}
