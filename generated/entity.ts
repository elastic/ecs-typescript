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
 * The entity fields provide a standardized way to represent and categorize different types of components within an IT environment, including those that don't have dedicated field sets in ECS. An entity represents a discrete, identifiable component that can be described by a set of attributes and maintains its identity over time.
 */
export interface EcsEntity {
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
}
