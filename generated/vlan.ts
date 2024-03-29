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
 * The VLAN fields are used to identify 802.1q tag(s) of a packet, as well as ingress and egress VLAN associations of an observer in relation to a specific packet or connection.
 * Network.vlan fields are used to record a single VLAN tag, or the outer tag in the case of q-in-q encapsulations, for a packet or connection as observed, typically provided by a network sensor (e.g. Zeek, Wireshark) passively reporting on traffic.
 * Network.inner VLAN fields are used to report inner q-in-q 802.1q tags (multiple 802.1q encapsulations) as observed, typically provided by a network sensor  (e.g. Zeek, Wireshark) passively reporting on traffic. Network.inner VLAN fields should only be used in addition to network.vlan fields to indicate q-in-q tagging.
 * Observer.ingress and observer.egress VLAN values are used to record observer specific information when observer events contain discrete ingress and egress VLAN information, typically provided by firewalls, routers, or load balancers.
 */
export interface EcsVlan {
  /**
   * VLAN ID as reported by the observer.
   */
  id?: string;
  /**
   * Optional VLAN name as reported by the observer.
   */
  name?: string;
}
