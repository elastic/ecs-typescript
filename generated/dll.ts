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
 * These fields contain information about code libraries dynamically loaded into processes.
 *
 * Many operating systems refer to "shared code libraries" with different names, but this field set refers to all of the following:
 * * Dynamic-link library (`.dll`) commonly used on Windows
 * * Shared Object (`.so`) commonly used on Unix-like operating systems
 * * Dynamic library (`.dylib`) commonly used on macOS
 */
export interface EcsDll {
  code_signature?: {
    /**
     * The hashing algorithm used to sign the process.
     * This value can distinguish signatures when a file is signed multiple times by the same signer but with a different digest algorithm.
     */
    digest_algorithm?: string;
    /**
     * Boolean to capture if a signature is present.
     */
    exists?: boolean;
    /**
     * The identifier used to sign the process.
     * This is used to identify the application manufactured by a software vendor. The field is relevant to Apple *OS only.
     */
    signing_id?: string;
    /**
     * Additional information about the certificate status.
     * This is useful for logging cryptographic errors with the certificate validity or trust status. Leave unpopulated if the validity or trust of the certificate was unchecked.
     */
    status?: string;
    /**
     * Subject name of the code signer
     */
    subject_name?: string;
    /**
     * The team identifier used to sign the process.
     * This is used to identify the team or vendor of a software product. The field is relevant to Apple *OS only.
     */
    team_id?: string;
    /**
     * Date and time when the code signature was generated and signed.
     */
    timestamp?: string;
    /**
     * Stores the trust status of the certificate chain.
     * Validating the trust of the certificate chain may be complicated, and this field should only be populated by tools that actively check the status.
     */
    trusted?: boolean;
    /**
     * Boolean to capture if the digital signature is verified against the binary content.
     * Leave unpopulated if a certificate was unchecked.
     */
    valid?: boolean;
  };

  hash?: {
    /**
     * MD5 hash.
     */
    md5?: string;
    /**
     * SHA1 hash.
     */
    sha1?: string;
    /**
     * SHA256 hash.
     */
    sha256?: string;
    /**
     * SHA384 hash.
     */
    sha384?: string;
    /**
     * SHA512 hash.
     */
    sha512?: string;
    /**
     * SSDEEP hash.
     */
    ssdeep?: string;
    /**
     * TLSH hash.
     */
    tlsh?: string;
  };

  /**
   * Name of the library.
   * This generally maps to the name of the file on disk.
   */
  name?: string;
  /**
   * Full file path of the library.
   */
  path?: string;
  pe?: {
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
     * A hash of the imports in a PE file. An imphash -- or import hash -- can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
     * Learn more at https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html.
     */
    imphash?: string;
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
  };
}
