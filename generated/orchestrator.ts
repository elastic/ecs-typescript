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
 * Fields that describe the resources which container orchestrators manage or act upon.
 */
export interface EcsOrchestrator {
  /**
   * API version being used to carry out the action
   */
  api_version?: string;
  cluster?: {
    /**
     * Unique ID of the cluster.
     */
    id?: string;
    /**
     * Name of the cluster.
     */
    name?: string;
    /**
     * URL of the API used to manage the cluster.
     */
    url?: string;
    /**
     * The version of the cluster.
     */
    version?: string;
  };

  /**
   * Namespace in which the action is taking place.
   */
  namespace?: string;
  /**
   * Organization affected by the event (for multi-tenant orchestrator setups).
   */
  organization?: string;
  resource?: {
    /**
     * The list of annotations added to the resource.
     */
    annotation?: string | Array<string>;
    /**
     * Unique ID of the resource being acted upon.
     */
    id?: string;
    /**
     * IP address assigned to the resource associated with the event being observed. In the case of a Kubernetes Pod, this array would contain only one element: the IP of the Pod (as opposed to the Node on which the Pod is running).
     */
    ip?: string | Array<string>;
    /**
     * The list of labels added to the resource.
     */
    label?: string | Array<string>;
    /**
     * Name of the resource being acted upon.
     */
    name?: string;
    parent?: {
      /**
       * Type or kind of the parent resource associated with the event being observed. In Kubernetes, this will be the name of a built-in workload resource (e.g., Deployment, StatefulSet, DaemonSet).
       */
      type?: string;
    };

    /**
     * Type of resource being acted upon.
     */
    type?: string;
  };

  /**
   * Orchestrator cluster type (e.g. kubernetes, nomad or cloudfoundry).
   */
  type?: string;
}
