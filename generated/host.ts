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
 * A host is defined as a general computing instance.
 * ECS host.* fields should be populated with details about the host on which the event happened, or from which the measurement was taken. Host types include hardware, virtual machines, Docker containers, and Kubernetes nodes.
 */
export interface EcsHost {
  /**
   * Operating system architecture.
   */
  architecture?: string;
  boot?: {
    /**
     * Linux boot uuid taken from /proc/sys/kernel/random/boot_id. Note the boot_id value from /proc may or may not be the same in containers as on the host. Some container runtimes will bind mount a new boot_id value onto the proc file in each container.
     */
    id?: string;
  };

  cpu?: {
    /**
     * Percent CPU used which is normalized by the number of CPU cores and it ranges from 0 to 1.
     * Scaling factor: 1000.
     * For example: For a two core host, this value should be the average of the two cores, between 0 and 1.
     */
    usage?: number;
  };

  disk?: {
    read?: {
      /**
       * The total number of bytes (gauge) read successfully (aggregated from all disks) since the last metric collection.
       */
      bytes?: number;
    };

    write?: {
      /**
       * The total number of bytes (gauge) written successfully (aggregated from all disks) since the last metric collection.
       */
      bytes?: number;
    };
  };

  /**
   * Name of the domain of which the host is a member.
   * For example, on Windows this could be the host's Active Directory domain or NetBIOS domain name. For Linux this could be the domain of the host's LDAP provider.
   */
  domain?: string;
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
     * A standardized high-level classification of the entity. This provides a normalized way to group similar entities across different providers or systems. Example values: `bucket`, `database`, `container`, `function`, `queue`, `host`, `user`, `application`, `session`, `cloud`, `orchestrator`, etc. If an entity is nested under a top-level namespace like `host` or `cloud`, or similar, its type array should include the matching value — for example, `host` or `cloud`.
     */
    type?: string | Array<string>;
  };

  geo?: {
    /**
     * City name.
     */
    city_name?: string;
    /**
     * Two-letter code representing continent's name.
     */
    continent_code?: string;
    /**
     * Name of the continent.
     */
    continent_name?: string;
    /**
     * Country ISO code.
     */
    country_iso_code?: string;
    /**
     * Country name.
     */
    country_name?: string;
    /**
     * Longitude and latitude.
     */
    location?: { lat: number; lon: number };
    /**
     * User-defined description of a location, at the level of granularity they care about.
     * Could be the name of their data centers, the floor number, if this describes a local physical entity, city names.
     * Not typically used in automated geolocation.
     */
    name?: string;
    /**
     * Postal code associated with the location.
     * Values appropriate for this field may also be known as a postcode or ZIP code and will vary widely from country to country.
     */
    postal_code?: string;
    /**
     * Region ISO code.
     */
    region_iso_code?: string;
    /**
     * Region name.
     */
    region_name?: string;
    /**
     * The time zone of the location, such as IANA time zone name.
     */
    timezone?: string;
  };

  /**
   * Hostname of the host.
   * It normally contains what the `hostname` command returns on the host machine.
   */
  hostname?: string;
  /**
   * Unique host id.
   * As hostname is not always unique, use values that are meaningful in your environment.
   * Example: The current usage of `beat.name`.
   */
  id?: string;
  /**
   * Host ip addresses.
   */
  ip?: string | Array<string>;
  /**
   * Host MAC addresses.
   * The notation format from RFC 7042 is suggested: Each octet (that is, 8-bit byte) is represented by two [uppercase] hexadecimal digits giving the value of the octet as an unsigned integer. Successive octets are separated by a hyphen.
   */
  mac?: string | Array<string>;
  /**
   * Name of the host.
   * It can contain what hostname returns on Unix systems, the fully qualified domain name (FQDN), or a name specified by the user. The recommended value is the lowercase FQDN of the host.
   */
  name?: string;
  network?: {
    egress?: {
      /**
       * The number of bytes (gauge) sent out on all network interfaces by the host since the last metric collection.
       */
      bytes?: number;
      /**
       * The number of packets (gauge) sent out on all network interfaces by the host since the last metric collection.
       */
      packets?: number;
    };

    ingress?: {
      /**
       * The number of bytes received (gauge) on all network interfaces by the host since the last metric collection.
       */
      bytes?: number;
      /**
       * The number of packets (gauge) received on all network interfaces by the host since the last metric collection.
       */
      packets?: number;
    };
  };

  os?: {
    /**
     * OS family (such as redhat, debian, freebsd, windows).
     */
    family?: string;
    /**
     * Operating system name, including the version or code name.
     */
    full?: string;
    /**
     * Operating system kernel version as a raw string.
     */
    kernel?: string;
    /**
     * Operating system name, without the version.
     */
    name?: string;
    /**
     * Operating system platform (such centos, ubuntu, windows).
     */
    platform?: string;
    /**
     * Use the `os.type` field to categorize the operating system into one of the broad commercial families.
     * If the OS you're dealing with is not listed as an expected value, the field should not be populated. Please let us know by opening an issue with ECS, to propose its addition.
     */
    type?: string;
    /**
     * Operating system version as a raw string.
     */
    version?: string;
  };

  /**
   * This is the inode number of the namespace in the namespace file system (nsfs). Unsigned int inum in include/linux/ns_common.h.
   */
  pid_ns_ino?: string;
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

  target?: {
    /**
     * Operating system architecture.
     */
    architecture?: string;
    boot?: {
      /**
       * Linux boot uuid taken from /proc/sys/kernel/random/boot_id. Note the boot_id value from /proc may or may not be the same in containers as on the host. Some container runtimes will bind mount a new boot_id value onto the proc file in each container.
       */
      id?: string;
    };

    cpu?: {
      /**
       * Percent CPU used which is normalized by the number of CPU cores and it ranges from 0 to 1.
       * Scaling factor: 1000.
       * For example: For a two core host, this value should be the average of the two cores, between 0 and 1.
       */
      usage?: number;
    };

    disk?: {
      read?: {
        /**
         * The total number of bytes (gauge) read successfully (aggregated from all disks) since the last metric collection.
         */
        bytes?: number;
      };

      write?: {
        /**
         * The total number of bytes (gauge) written successfully (aggregated from all disks) since the last metric collection.
         */
        bytes?: number;
      };
    };

    /**
     * Name of the domain of which the host is a member.
     * For example, on Windows this could be the host's Active Directory domain or NetBIOS domain name. For Linux this could be the domain of the host's LDAP provider.
     */
    domain?: string;
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
       * A standardized high-level classification of the entity. This provides a normalized way to group similar entities across different providers or systems. Example values: `bucket`, `database`, `container`, `function`, `queue`, `host`, `user`, `application`, `session`, `cloud`, `orchestrator`, etc. If an entity is nested under a top-level namespace like `host` or `cloud`, or similar, its type array should include the matching value — for example, `host` or `cloud`.
       */
      type?: string | Array<string>;
    };

    geo?: {
      /**
       * City name.
       */
      city_name?: string;
      /**
       * Two-letter code representing continent's name.
       */
      continent_code?: string;
      /**
       * Name of the continent.
       */
      continent_name?: string;
      /**
       * Country ISO code.
       */
      country_iso_code?: string;
      /**
       * Country name.
       */
      country_name?: string;
      /**
       * Longitude and latitude.
       */
      location?: { lat: number; lon: number };
      /**
       * User-defined description of a location, at the level of granularity they care about.
       * Could be the name of their data centers, the floor number, if this describes a local physical entity, city names.
       * Not typically used in automated geolocation.
       */
      name?: string;
      /**
       * Postal code associated with the location.
       * Values appropriate for this field may also be known as a postcode or ZIP code and will vary widely from country to country.
       */
      postal_code?: string;
      /**
       * Region ISO code.
       */
      region_iso_code?: string;
      /**
       * Region name.
       */
      region_name?: string;
      /**
       * The time zone of the location, such as IANA time zone name.
       */
      timezone?: string;
    };

    /**
     * Hostname of the host.
     * It normally contains what the `hostname` command returns on the host machine.
     */
    hostname?: string;
    /**
     * Unique host id.
     * As hostname is not always unique, use values that are meaningful in your environment.
     * Example: The current usage of `beat.name`.
     */
    id?: string;
    /**
     * Host ip addresses.
     */
    ip?: string | Array<string>;
    /**
     * Host MAC addresses.
     * The notation format from RFC 7042 is suggested: Each octet (that is, 8-bit byte) is represented by two [uppercase] hexadecimal digits giving the value of the octet as an unsigned integer. Successive octets are separated by a hyphen.
     */
    mac?: string | Array<string>;
    /**
     * Name of the host.
     * It can contain what hostname returns on Unix systems, the fully qualified domain name (FQDN), or a name specified by the user. The recommended value is the lowercase FQDN of the host.
     */
    name?: string;
    network?: {
      egress?: {
        /**
         * The number of bytes (gauge) sent out on all network interfaces by the host since the last metric collection.
         */
        bytes?: number;
        /**
         * The number of packets (gauge) sent out on all network interfaces by the host since the last metric collection.
         */
        packets?: number;
      };

      ingress?: {
        /**
         * The number of bytes received (gauge) on all network interfaces by the host since the last metric collection.
         */
        bytes?: number;
        /**
         * The number of packets (gauge) received on all network interfaces by the host since the last metric collection.
         */
        packets?: number;
      };
    };

    os?: {
      /**
       * OS family (such as redhat, debian, freebsd, windows).
       */
      family?: string;
      /**
       * Operating system name, including the version or code name.
       */
      full?: string;
      /**
       * Operating system kernel version as a raw string.
       */
      kernel?: string;
      /**
       * Operating system name, without the version.
       */
      name?: string;
      /**
       * Operating system platform (such centos, ubuntu, windows).
       */
      platform?: string;
      /**
       * Use the `os.type` field to categorize the operating system into one of the broad commercial families.
       * If the OS you're dealing with is not listed as an expected value, the field should not be populated. Please let us know by opening an issue with ECS, to propose its addition.
       */
      type?: string;
      /**
       * Operating system version as a raw string.
       */
      version?: string;
    };

    /**
     * This is the inode number of the namespace in the namespace file system (nsfs). Unsigned int inum in include/linux/ns_common.h.
     */
    pid_ns_ino?: string;
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
     * Type of host.
     * For Cloud providers this can be the machine type like `t2.medium`. If vm, this could be the container, for example, or other information meaningful in your environment.
     */
    type?: string;
    /**
     * Seconds the host has been up.
     */
    uptime?: number;
  };

  /**
   * Type of host.
   * For Cloud providers this can be the machine type like `t2.medium`. If vm, this could be the container, for example, or other information meaningful in your environment.
   */
  type?: string;
  /**
   * Seconds the host has been up.
   */
  uptime?: number;
}
