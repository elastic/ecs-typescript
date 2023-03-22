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
 * These fields contain Linux Executable Linkable Format (ELF) metadata.
 */
export interface EcsElf {
  /**
   * Machine architecture of the ELF file.
   */
  architecture?: string;
  /**
   * Byte sequence of ELF file.
   */
  byte_order?: string;
  /**
   * CPU type of the ELF file.
   */
  cpu_type?: string;
  /**
   * Extracted when possible from the file's metadata. Indicates when it was built or compiled. It can also be faked by malware creators.
   */
  creation_date?: string;
  /**
   * List of exported element names and types.
   */
  exports?: Record<string, unknown> | Array<Record<string, unknown>>;
  header?: {
    /**
     * Version of the ELF Application Binary Interface (ABI).
     */
    abi_version?: string;
    /**
     * Header class of the ELF file.
     */
    class?: string;
    /**
     * Data table of the ELF header.
     */
    data?: string;
    /**
     * Header entrypoint of the ELF file.
     */
    entrypoint?: number;
    /**
     * "0x1" for original ELF files.
     */
    object_version?: string;
    /**
     * Application Binary Interface (ABI) of the Linux OS.
     */
    os_abi?: string;
    /**
     * Header type of the ELF file.
     */
    type?: string;
    /**
     * Version of the ELF header.
     */
    version?: string;
  };

  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * An array containing an object for each section of the ELF file.
   * The keys that should be present in these objects are defined by sub-fields underneath `elf.sections.*`.
   */
  sections?: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * An array containing an object for each segment of the ELF file.
   * The keys that should be present in these objects are defined by sub-fields underneath `elf.segments.*`.
   */
  segments?: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * List of shared libraries used by this ELF object.
   */
  shared_libraries?: string | Array<string>;
  /**
   * telfhash symbol hash for ELF file.
   */
  telfhash?: string;
}
