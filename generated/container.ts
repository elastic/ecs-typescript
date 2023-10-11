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
 * Container fields are used for meta information about the specific container that is the source of information.
 * These fields help correlate data based containers from any runtime.
 */
export interface EcsContainer {
  cpu?: {
    /**
     * Percent CPU used which is normalized by the number of CPU cores and it ranges from 0 to 1. Scaling factor: 1000.
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
   * Unique container id.
   */
  id?: string;
  image?: {
    hash?: {
      /**
       * An array of digests of the image the container was built on. Each digest consists of the hash algorithm and value in this format: `algorithm:value`. Algorithm names should align with the field names in the ECS hash field set.
       */
      all?: string | Array<string>;
    };

    /**
     * Name of the image the container was built on.
     */
    name?: string;
    /**
     * Container image tags.
     */
    tag?: string | Array<string>;
  };

  /**
   * Image labels.
   */
  labels?: Record<string, unknown>;
  memory?: {
    /**
     * Memory usage percentage and it ranges from 0 to 1. Scaling factor: 1000.
     */
    usage?: number;
  };

  /**
   * Container name.
   */
  name?: string;
  network?: {
    egress?: {
      /**
       * The number of bytes (gauge) sent out on all network interfaces by the container since the last metric collection.
       */
      bytes?: number;
    };

    ingress?: {
      /**
       * The number of bytes received (gauge) on all network interfaces by the container since the last metric collection.
       */
      bytes?: number;
    };
  };

  /**
   * Runtime managing this container.
   */
  runtime?: string;
  security_context?: {
    /**
     * Indicates whether the container is running in privileged mode.
     */
    privileged?: boolean;
  };
}
