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
 * A reusable set of identifier fields used to reference other entities in relationship contexts. Each field holds a keyword array of identifiers following the same conventions as the corresponding ECS root field. Only the fields defined in this field set might appear, ad-hoc or integration-specific property names are not allowed.
 */
export interface EcsEntityReference {
  entity?: {
    /**
     * Identifiers of referenced entities, using the same meaning as root `entity.id` (stable id for correlation within scope).
     */
    id?: string | Array<string>;
  };

  host?: {
    /**
     * Referenced host ids.
     */
    id?: string | Array<string>;
    /**
     * Referenced host names.
     */
    name?: string | Array<string>;
  };

  service?: {
    /**
     * Referenced service ids.
     */
    id?: string | Array<string>;
    /**
     * Referenced service names.
     */
    name?: string | Array<string>;
  };

  user?: {
    /**
     * Referenced user directory or AD/LDAP domain names (same semantics as ECS `user.domain`).
     */
    domain?: string | Array<string>;
    /**
     * Referenced user email addresses.
     */
    email?: string | Array<string>;
    /**
     * Referenced user ids.
     */
    id?: string | Array<string>;
    /**
     * Referenced user short names or logins.
     */
    name?: string | Array<string>;
  };
}
