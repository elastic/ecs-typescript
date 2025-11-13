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
 * The service fields describe the service for or from which the data was collected.
 * These fields help you find and correlate logs for a specific service and version.
 */
export interface EcsService {
  /**
   * Address where data about this service was collected from.
   * This should be a URI, network address (ipv4:port or [ipv6]:port) or a resource path (sockets).
   */
  address?: string;
  entity?: {
    /**
     * A set of static or semi-static attributes of the entity. Usually boolean or keyword field data types. Use this field set when you need to track static or semi-static characteristics of an entity for advanced searching and correlation of normalized values across different providers/sources and entity types.
     */
    attributes?: Record<string, unknown>;
    /**
     * A set of ephemeral characteristics of the entity, derived from observed behaviors during a specific time period. Usually boolean field data type. Use this field set when you need to capture and track ephemeral characteristics of an entity for advanced searching, correlation of normalized values across different providers/sources and entity types.
     */
    behavior?: Record<string, unknown>;
    /**
     * An optional field used when a pretty name is desired for entity-centric operations. This field should not be used for correlation with `*.name` fields for entities with dedicated field sets (e.g., `host`).
     */
    display_name?: string;
    /**
     * A unique identifier for the entity. When multiple identifiers exist, this should be the most stable and commonly used identifier that: 1) persists across the entity's lifecycle, 2) ensures uniqueness within its scope, 3) is commonly used for queries and correlation, and 4) is readily available in most observations (logs/events). For entities with dedicated field sets (e.g., host, user), this value should match the corresponding *.id field. Alternative identifiers (e.g., ARNs values in AWS, URLs) can be preserved in the raw field.
     */
    id?: string;
    /**
     * Indicates the date/time when this entity was last "seen," usually based upon the last event/log that is initiated by this entity.
     */
    last_seen_timestamp?: string;
    /**
     * A set of temporal characteristics of the entity. Usually date field data type. Use this field set when you need to track temporal characteristics of an entity for advanced searching and correlation of normalized values across different providers/sources and entity types.
     */
    lifecycle?: Record<string, unknown>;
    /**
     * Field set for any fields containing numeric entity metrics. These use dynamic field data type mapping.
     */
    metrics?: Record<string, unknown>;
    /**
     * The name of the entity. The keyword field enables exact matches for filtering and aggregations, while the text field enables full-text search. For entities with dedicated field sets (e.g., `host`), this field should mirrors the corresponding *.name value.
     */
    name?: string;
    /**
     * Original, unmodified fields from the source system. Usually flattened field data type. While the attributes field should be used for normalized fields requiring advanced queries, this field preserves all source metadata with basic search capabilities.
     */
    raw?: Record<string, unknown>;
    /**
     * A URI, URL, or other direct reference to access or locate the entity in its source system. This could be an API endpoint, web console URL, or other addressable location. Format may vary by entity type and source system.
     */
    reference?: string;
    /**
     * The module or integration that provided this entity data (similar to event.module).
     */
    source?: string;
    /**
     * The specific type designation for the entity as defined by its provider or system. This field provides more granular classification than the type field. Examples: `aws_s3_bucket`, `gcp_cloud_storage_bucket`, `azure_blob_container` would all map to entity type `bucket`.  `hardware` , `virtual` , `container` , `node` , `cloud_instance` would all map to entity type `host`.
     */
    sub_type?: string;
    /**
     * A standardized high-level classification of the entity. This provides a normalized way to group similar entities across different providers or systems. Example values: `bucket`, `database`, `container`, `function`, `queue`, `host`, `user`, `application`, `session`, etc.
     */
    type?: string | Array<string>;
  };

  /**
   * Identifies the environment where the service is running.
   * If the same service runs in different environments (production, staging, QA, development, etc.), the environment can identify other instances of the same service. Can also group services and applications from the same environment.
   */
  environment?: string;
  /**
   * Ephemeral identifier of this service (if one exists).
   * This id normally changes across restarts, but `service.id` does not.
   */
  ephemeral_id?: string;
  /**
   * Unique identifier of the running service. If the service is comprised of many nodes, the `service.id` should be the same for all nodes.
   * This id should uniquely identify the service. This makes it possible to correlate logs and metrics for one specific service, no matter which particular node emitted the event.
   * Note that if you need to see the events from one specific host of the service, you should filter on that `host.name` or `host.id` instead.
   */
  id?: string;
  /**
   * Name of the service data is collected from.
   * The name of the service is normally user given. This allows for distributed services that run on multiple hosts to correlate the related instances based on the name.
   * In the case of Elasticsearch the `service.name` could contain the cluster name. For Beats the `service.name` is by default a copy of the `service.type` field if no name is specified.
   */
  name?: string;
  node?: {
    /**
     * Name of a service node.
     * This allows for two nodes of the same service running on the same host to be differentiated. Therefore, `service.node.name` should typically be unique across nodes of a given service.
     * In the case of Elasticsearch, the `service.node.name` could contain the unique node name within the Elasticsearch cluster. In cases where the service doesn't have the concept of a node name, the host name or container name can be used to distinguish running instances that make up this service. If those do not provide uniqueness (e.g. multiple instances of the service running on the same host) - the node name can be manually set.
     */
    name?: string;
    /**
     * Deprecated for removal in next major version release. This field will be superseded by `node.roles`.
     * Role of a service node.
     * This allows for distinction between different running roles of the same service.
     * In the case of Kibana, the `service.node.role` could be `ui` or `background_tasks`.
     * In the case of Elasticsearch, the `service.node.role` could be `master` or `data`.
     * Other services could use this to distinguish between a `web` and `worker` role running as part of the service.
     */
    role?: string;
    /**
     * Roles of a service node.
     * This allows for distinction between different running roles of the same service.
     * In the case of Kibana, the `service.node.role` could be `ui` or `background_tasks` or both.
     * In the case of Elasticsearch, the `service.node.role` could be `master` or `data` or both.
     * Other services could use this to distinguish between a `web` and `worker` role running as part of the service.
     */
    roles?: string | Array<string>;
  };

  origin?: {
    /**
     * Address where data about this service was collected from.
     * This should be a URI, network address (ipv4:port or [ipv6]:port) or a resource path (sockets).
     */
    address?: string;
    entity?: {
      /**
       * A set of static or semi-static attributes of the entity. Usually boolean or keyword field data types. Use this field set when you need to track static or semi-static characteristics of an entity for advanced searching and correlation of normalized values across different providers/sources and entity types.
       */
      attributes?: Record<string, unknown>;
      /**
       * A set of ephemeral characteristics of the entity, derived from observed behaviors during a specific time period. Usually boolean field data type. Use this field set when you need to capture and track ephemeral characteristics of an entity for advanced searching, correlation of normalized values across different providers/sources and entity types.
       */
      behavior?: Record<string, unknown>;
      /**
       * An optional field used when a pretty name is desired for entity-centric operations. This field should not be used for correlation with `*.name` fields for entities with dedicated field sets (e.g., `host`).
       */
      display_name?: string;
      /**
       * A unique identifier for the entity. When multiple identifiers exist, this should be the most stable and commonly used identifier that: 1) persists across the entity's lifecycle, 2) ensures uniqueness within its scope, 3) is commonly used for queries and correlation, and 4) is readily available in most observations (logs/events). For entities with dedicated field sets (e.g., host, user), this value should match the corresponding *.id field. Alternative identifiers (e.g., ARNs values in AWS, URLs) can be preserved in the raw field.
       */
      id?: string;
      /**
       * Indicates the date/time when this entity was last "seen," usually based upon the last event/log that is initiated by this entity.
       */
      last_seen_timestamp?: string;
      /**
       * A set of temporal characteristics of the entity. Usually date field data type. Use this field set when you need to track temporal characteristics of an entity for advanced searching and correlation of normalized values across different providers/sources and entity types.
       */
      lifecycle?: Record<string, unknown>;
      /**
       * Field set for any fields containing numeric entity metrics. These use dynamic field data type mapping.
       */
      metrics?: Record<string, unknown>;
      /**
       * The name of the entity. The keyword field enables exact matches for filtering and aggregations, while the text field enables full-text search. For entities with dedicated field sets (e.g., `host`), this field should mirrors the corresponding *.name value.
       */
      name?: string;
      /**
       * Original, unmodified fields from the source system. Usually flattened field data type. While the attributes field should be used for normalized fields requiring advanced queries, this field preserves all source metadata with basic search capabilities.
       */
      raw?: Record<string, unknown>;
      /**
       * A URI, URL, or other direct reference to access or locate the entity in its source system. This could be an API endpoint, web console URL, or other addressable location. Format may vary by entity type and source system.
       */
      reference?: string;
      /**
       * The module or integration that provided this entity data (similar to event.module).
       */
      source?: string;
      /**
       * The specific type designation for the entity as defined by its provider or system. This field provides more granular classification than the type field. Examples: `aws_s3_bucket`, `gcp_cloud_storage_bucket`, `azure_blob_container` would all map to entity type `bucket`.  `hardware` , `virtual` , `container` , `node` , `cloud_instance` would all map to entity type `host`.
       */
      sub_type?: string;
      /**
       * A standardized high-level classification of the entity. This provides a normalized way to group similar entities across different providers or systems. Example values: `bucket`, `database`, `container`, `function`, `queue`, `host`, `user`, `application`, `session`, etc.
       */
      type?: string | Array<string>;
    };

    /**
     * Identifies the environment where the service is running.
     * If the same service runs in different environments (production, staging, QA, development, etc.), the environment can identify other instances of the same service. Can also group services and applications from the same environment.
     */
    environment?: string;
    /**
     * Ephemeral identifier of this service (if one exists).
     * This id normally changes across restarts, but `service.id` does not.
     */
    ephemeral_id?: string;
    /**
     * Unique identifier of the running service. If the service is comprised of many nodes, the `service.id` should be the same for all nodes.
     * This id should uniquely identify the service. This makes it possible to correlate logs and metrics for one specific service, no matter which particular node emitted the event.
     * Note that if you need to see the events from one specific host of the service, you should filter on that `host.name` or `host.id` instead.
     */
    id?: string;
    /**
     * Name of the service data is collected from.
     * The name of the service is normally user given. This allows for distributed services that run on multiple hosts to correlate the related instances based on the name.
     * In the case of Elasticsearch the `service.name` could contain the cluster name. For Beats the `service.name` is by default a copy of the `service.type` field if no name is specified.
     */
    name?: string;
    node?: {
      /**
       * Name of a service node.
       * This allows for two nodes of the same service running on the same host to be differentiated. Therefore, `service.node.name` should typically be unique across nodes of a given service.
       * In the case of Elasticsearch, the `service.node.name` could contain the unique node name within the Elasticsearch cluster. In cases where the service doesn't have the concept of a node name, the host name or container name can be used to distinguish running instances that make up this service. If those do not provide uniqueness (e.g. multiple instances of the service running on the same host) - the node name can be manually set.
       */
      name?: string;
      /**
       * Deprecated for removal in next major version release. This field will be superseded by `node.roles`.
       * Role of a service node.
       * This allows for distinction between different running roles of the same service.
       * In the case of Kibana, the `service.node.role` could be `ui` or `background_tasks`.
       * In the case of Elasticsearch, the `service.node.role` could be `master` or `data`.
       * Other services could use this to distinguish between a `web` and `worker` role running as part of the service.
       */
      role?: string;
      /**
       * Roles of a service node.
       * This allows for distinction between different running roles of the same service.
       * In the case of Kibana, the `service.node.role` could be `ui` or `background_tasks` or both.
       * In the case of Elasticsearch, the `service.node.role` could be `master` or `data` or both.
       * Other services could use this to distinguish between a `web` and `worker` role running as part of the service.
       */
      roles?: string | Array<string>;
    };

    /**
     * Current state of the service.
     */
    state?: string;
    /**
     * The type of the service data is collected from.
     * The type can be used to group and correlate logs and metrics from one service type.
     * Example: If logs or metrics are collected from Elasticsearch, `service.type` would be `elasticsearch`.
     */
    type?: string;
    /**
     * Version of the service the data was collected from.
     * This allows to look at a data set only for a specific version of a service.
     */
    version?: string;
  };

  /**
   * Current state of the service.
   */
  state?: string;
  target?: {
    /**
     * Address where data about this service was collected from.
     * This should be a URI, network address (ipv4:port or [ipv6]:port) or a resource path (sockets).
     */
    address?: string;
    entity?: {
      /**
       * A set of static or semi-static attributes of the entity. Usually boolean or keyword field data types. Use this field set when you need to track static or semi-static characteristics of an entity for advanced searching and correlation of normalized values across different providers/sources and entity types.
       */
      attributes?: Record<string, unknown>;
      /**
       * A set of ephemeral characteristics of the entity, derived from observed behaviors during a specific time period. Usually boolean field data type. Use this field set when you need to capture and track ephemeral characteristics of an entity for advanced searching, correlation of normalized values across different providers/sources and entity types.
       */
      behavior?: Record<string, unknown>;
      /**
       * An optional field used when a pretty name is desired for entity-centric operations. This field should not be used for correlation with `*.name` fields for entities with dedicated field sets (e.g., `host`).
       */
      display_name?: string;
      /**
       * A unique identifier for the entity. When multiple identifiers exist, this should be the most stable and commonly used identifier that: 1) persists across the entity's lifecycle, 2) ensures uniqueness within its scope, 3) is commonly used for queries and correlation, and 4) is readily available in most observations (logs/events). For entities with dedicated field sets (e.g., host, user), this value should match the corresponding *.id field. Alternative identifiers (e.g., ARNs values in AWS, URLs) can be preserved in the raw field.
       */
      id?: string;
      /**
       * Indicates the date/time when this entity was last "seen," usually based upon the last event/log that is initiated by this entity.
       */
      last_seen_timestamp?: string;
      /**
       * A set of temporal characteristics of the entity. Usually date field data type. Use this field set when you need to track temporal characteristics of an entity for advanced searching and correlation of normalized values across different providers/sources and entity types.
       */
      lifecycle?: Record<string, unknown>;
      /**
       * Field set for any fields containing numeric entity metrics. These use dynamic field data type mapping.
       */
      metrics?: Record<string, unknown>;
      /**
       * The name of the entity. The keyword field enables exact matches for filtering and aggregations, while the text field enables full-text search. For entities with dedicated field sets (e.g., `host`), this field should mirrors the corresponding *.name value.
       */
      name?: string;
      /**
       * Original, unmodified fields from the source system. Usually flattened field data type. While the attributes field should be used for normalized fields requiring advanced queries, this field preserves all source metadata with basic search capabilities.
       */
      raw?: Record<string, unknown>;
      /**
       * A URI, URL, or other direct reference to access or locate the entity in its source system. This could be an API endpoint, web console URL, or other addressable location. Format may vary by entity type and source system.
       */
      reference?: string;
      /**
       * The module or integration that provided this entity data (similar to event.module).
       */
      source?: string;
      /**
       * The specific type designation for the entity as defined by its provider or system. This field provides more granular classification than the type field. Examples: `aws_s3_bucket`, `gcp_cloud_storage_bucket`, `azure_blob_container` would all map to entity type `bucket`.  `hardware` , `virtual` , `container` , `node` , `cloud_instance` would all map to entity type `host`.
       */
      sub_type?: string;
      /**
       * A standardized high-level classification of the entity. This provides a normalized way to group similar entities across different providers or systems. Example values: `bucket`, `database`, `container`, `function`, `queue`, `host`, `user`, `application`, `session`, etc.
       */
      type?: string | Array<string>;
    };

    /**
     * Identifies the environment where the service is running.
     * If the same service runs in different environments (production, staging, QA, development, etc.), the environment can identify other instances of the same service. Can also group services and applications from the same environment.
     */
    environment?: string;
    /**
     * Ephemeral identifier of this service (if one exists).
     * This id normally changes across restarts, but `service.id` does not.
     */
    ephemeral_id?: string;
    /**
     * Unique identifier of the running service. If the service is comprised of many nodes, the `service.id` should be the same for all nodes.
     * This id should uniquely identify the service. This makes it possible to correlate logs and metrics for one specific service, no matter which particular node emitted the event.
     * Note that if you need to see the events from one specific host of the service, you should filter on that `host.name` or `host.id` instead.
     */
    id?: string;
    /**
     * Name of the service data is collected from.
     * The name of the service is normally user given. This allows for distributed services that run on multiple hosts to correlate the related instances based on the name.
     * In the case of Elasticsearch the `service.name` could contain the cluster name. For Beats the `service.name` is by default a copy of the `service.type` field if no name is specified.
     */
    name?: string;
    node?: {
      /**
       * Name of a service node.
       * This allows for two nodes of the same service running on the same host to be differentiated. Therefore, `service.node.name` should typically be unique across nodes of a given service.
       * In the case of Elasticsearch, the `service.node.name` could contain the unique node name within the Elasticsearch cluster. In cases where the service doesn't have the concept of a node name, the host name or container name can be used to distinguish running instances that make up this service. If those do not provide uniqueness (e.g. multiple instances of the service running on the same host) - the node name can be manually set.
       */
      name?: string;
      /**
       * Deprecated for removal in next major version release. This field will be superseded by `node.roles`.
       * Role of a service node.
       * This allows for distinction between different running roles of the same service.
       * In the case of Kibana, the `service.node.role` could be `ui` or `background_tasks`.
       * In the case of Elasticsearch, the `service.node.role` could be `master` or `data`.
       * Other services could use this to distinguish between a `web` and `worker` role running as part of the service.
       */
      role?: string;
      /**
       * Roles of a service node.
       * This allows for distinction between different running roles of the same service.
       * In the case of Kibana, the `service.node.role` could be `ui` or `background_tasks` or both.
       * In the case of Elasticsearch, the `service.node.role` could be `master` or `data` or both.
       * Other services could use this to distinguish between a `web` and `worker` role running as part of the service.
       */
      roles?: string | Array<string>;
    };

    /**
     * Current state of the service.
     */
    state?: string;
    /**
     * The type of the service data is collected from.
     * The type can be used to group and correlate logs and metrics from one service type.
     * Example: If logs or metrics are collected from Elasticsearch, `service.type` would be `elasticsearch`.
     */
    type?: string;
    /**
     * Version of the service the data was collected from.
     * This allows to look at a data set only for a specific version of a service.
     */
    version?: string;
  };

  /**
   * The type of the service data is collected from.
   * The type can be used to group and correlate logs and metrics from one service type.
   * Example: If logs or metrics are collected from Elasticsearch, `service.type` would be `elasticsearch`.
   */
  type?: string;
  /**
   * Version of the service the data was collected from.
   * This allows to look at a data set only for a specific version of a service.
   */
  version?: string;
}
