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
 * These fields contain Windows Portable Executable (PE) metadata.
 */
export interface EcsPe {
  /**
   * CPU architecture target for the file.
   */
  architecture?: string;
  /**
   * Internal company name of the file, provided at compile-time.
   */
  company?: string;
  /**
   * Internal description of the file, provided at compile-time.
   */
  description?: string;
  /**
   * Internal version of the file, provided at compile-time.
   */
  file_version?: string;
  /**
   * A hash of the Go language imports in a PE file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available here: https://github.com/elastic/toutoumomoma
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  /**
   * A hash of the imports in a PE file. An imphash -- or import hash -- can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * Learn more at https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html.
   */
  imphash?: string;
  /**
   * A hash of the imports in a PE file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a synonym for imphash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * Internal name of the file, provided at compile-time.
   */
  original_file_name?: string;
  /**
   * A hash of the PE header and data from one or more PE sections. An pehash can be used to cluster files by transforming structural information about a file into a hash value.
   * Learn more at https://www.usenix.org/legacy/events/leet09/tech/full_papers/wicherski/wicherski_html/index.html.
   */
  pehash?: string;
  /**
   * Internal product name of the file, provided at compile-time.
   */
  product?: string;
  /**
   * An array containing an object for each section of the PE file.
   * The keys that should be present in these objects are defined by sub-fields underneath `pe.sections.*`.
   */
  sections?: Record<string, unknown> | Array<Record<string, unknown>>;
}
