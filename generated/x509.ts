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
 * This implements the common core fields for x509 certificates. This information is likely logged with TLS sessions, digital signatures found in executable binaries, S/MIME information in email bodies, or analysis of files on disk.
 * When the certificate relates to a file, use the fields at `file.x509`. When hashes of the DER-encoded certificate are available, the `hash` data set should be populated as well (e.g. `file.hash.sha256`).
 * Events that contain certificate information about network connections, should use the x509 fields under the relevant TLS fields: `tls.server.x509` and/or `tls.client.x509`.
 */
export interface EcsX509 {
  /**
   * List of subject alternative names (SAN). Name types vary by certificate authority and certificate type but commonly contain IP addresses, DNS names (and wildcards), and email addresses.
   */
  alternative_names?: string | Array<string>;
  issuer?: {
    /**
     * List of common name (CN) of issuing certificate authority.
     */
    common_name?: string | Array<string>;
    /**
     * List of country \(C) codes
     */
    country?: string | Array<string>;
    /**
     * Distinguished name (DN) of issuing certificate authority.
     */
    distinguished_name?: string;
    /**
     * List of locality names (L)
     */
    locality?: string | Array<string>;
    /**
     * List of organizations (O) of issuing certificate authority.
     */
    organization?: string | Array<string>;
    /**
     * List of organizational units (OU) of issuing certificate authority.
     */
    organizational_unit?: string | Array<string>;
    /**
     * List of state or province names (ST, S, or P)
     */
    state_or_province?: string | Array<string>;
  };

  /**
   * Time at which the certificate is no longer considered valid.
   */
  not_after?: string;
  /**
   * Time at which the certificate is first considered valid.
   */
  not_before?: string;
  /**
   * Algorithm used to generate the public key.
   */
  public_key_algorithm?: string;
  /**
   * The curve used by the elliptic curve public key algorithm. This is algorithm specific.
   */
  public_key_curve?: string;
  /**
   * Exponent used to derive the public key. This is algorithm specific.
   */
  public_key_exponent?: number;
  /**
   * The size of the public key space in bits.
   */
  public_key_size?: number;
  /**
   * Unique serial number issued by the certificate authority. For consistency, if this value is alphanumeric, it should be formatted without colons and uppercase characters.
   */
  serial_number?: string;
  /**
   * Identifier for certificate signature algorithm. We recommend using names found in Go Lang Crypto library. See https://github.com/golang/go/blob/go1.14/src/crypto/x509/x509.go#L337-L353.
   */
  signature_algorithm?: string;
  subject?: {
    /**
     * List of common names (CN) of subject.
     */
    common_name?: string | Array<string>;
    /**
     * List of country \(C) code
     */
    country?: string | Array<string>;
    /**
     * Distinguished name (DN) of the certificate subject entity.
     */
    distinguished_name?: string;
    /**
     * List of locality names (L)
     */
    locality?: string | Array<string>;
    /**
     * List of organizations (O) of subject.
     */
    organization?: string | Array<string>;
    /**
     * List of organizational units (OU) of subject.
     */
    organizational_unit?: string | Array<string>;
    /**
     * List of state or province names (ST, S, or P)
     */
    state_or_province?: string | Array<string>;
  };

  /**
   * Version of x509 format.
   */
  version_number?: string;
}
