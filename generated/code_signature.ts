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
 * These fields contain information about binary code signatures.
 */
export interface EcsCodeSignature {
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
   * The flags used to sign the process.
   */
  flags?: string;
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
   * Certificate SHA256 hash that uniquely identifies the code signer.
   */
  thumbprint_sha256?: string;
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
}
