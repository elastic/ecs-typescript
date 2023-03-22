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
 * Fields related to Windows Registry operations.
 */
export interface EcsRegistry {
  data?: {
    /**
     * Original bytes written with base64 encoding.
     * For Windows registry operations, such as SetValueEx and RegQueryValueEx, this corresponds to the data pointed by `lp_data`. This is optional but provides better recoverability and should be populated for REG_BINARY encoded values.
     */
    bytes?: string;
    /**
     * Content when writing string types.
     * Populated as an array when writing string data to the registry. For single string registry types (REG_SZ, REG_EXPAND_SZ), this should be an array with one string. For sequences of string with REG_MULTI_SZ, this array will be variable length. For numeric data, such as REG_DWORD and REG_QWORD, this should be populated with the decimal representation (e.g `"1"`).
     */
    strings?: string | Array<string>;
    /**
     * Standard registry type for encoding contents
     */
    type?: string;
  };

  /**
   * Abbreviated name for the hive.
   */
  hive?: string;
  /**
   * Hive-relative path of keys.
   */
  key?: string;
  /**
   * Full path, including hive, key and value
   */
  path?: string;
  /**
   * Name of the value written.
   */
  value?: string;
}
