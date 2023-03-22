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
 * The OS fields contain information about the operating system.
 */
export interface EcsOs {
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
}
