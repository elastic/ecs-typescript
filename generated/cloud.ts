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
 * Fields related to the cloud or infrastructure the events are coming from.
 */
export interface EcsCloud {
  account?: {
    /**
     * The cloud account or organization id used to identify different entities in a multi-tenant environment.
     * Examples: AWS account id, Google Cloud ORG Id, or other unique identifier.
     */
    id?: string;
    /**
     * The cloud account name or alias used to identify different entities in a multi-tenant environment.
     * Examples: AWS account name, Google Cloud ORG display name.
     */
    name?: string;
  };

  /**
   * Availability zone in which this host, resource, or service is located.
   */
  availability_zone?: string;
  instance?: {
    /**
     * Instance ID of the host machine.
     */
    id?: string;
    /**
     * Instance name of the host machine.
     */
    name?: string;
  };

  machine?: {
    /**
     * Machine type of the host machine.
     */
    type?: string;
  };

  origin?: {
    account?: {
      /**
       * The cloud account or organization id used to identify different entities in a multi-tenant environment.
       * Examples: AWS account id, Google Cloud ORG Id, or other unique identifier.
       */
      id?: string;
      /**
       * The cloud account name or alias used to identify different entities in a multi-tenant environment.
       * Examples: AWS account name, Google Cloud ORG display name.
       */
      name?: string;
    };

    /**
     * Availability zone in which this host, resource, or service is located.
     */
    availability_zone?: string;
    instance?: {
      /**
       * Instance ID of the host machine.
       */
      id?: string;
      /**
       * Instance name of the host machine.
       */
      name?: string;
    };

    machine?: {
      /**
       * Machine type of the host machine.
       */
      type?: string;
    };

    project?: {
      /**
       * The cloud project identifier.
       * Examples: Google Cloud Project id, Azure Project id.
       */
      id?: string;
      /**
       * The cloud project name.
       * Examples: Google Cloud Project name, Azure Project name.
       */
      name?: string;
    };

    /**
     * Name of the cloud provider. Example values are aws, azure, gcp, or digitalocean.
     */
    provider?: string;
    /**
     * Region in which this host, resource, or service is located.
     */
    region?: string;
    service?: {
      /**
       * The cloud service name is intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.
       * Examples: app engine, app service, cloud run, fargate, lambda.
       */
      name?: string;
    };
  };

  project?: {
    /**
     * The cloud project identifier.
     * Examples: Google Cloud Project id, Azure Project id.
     */
    id?: string;
    /**
     * The cloud project name.
     * Examples: Google Cloud Project name, Azure Project name.
     */
    name?: string;
  };

  /**
   * Name of the cloud provider. Example values are aws, azure, gcp, or digitalocean.
   */
  provider?: string;
  /**
   * Region in which this host, resource, or service is located.
   */
  region?: string;
  service?: {
    /**
     * The cloud service name is intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.
     * Examples: app engine, app service, cloud run, fargate, lambda.
     */
    name?: string;
  };

  target?: {
    account?: {
      /**
       * The cloud account or organization id used to identify different entities in a multi-tenant environment.
       * Examples: AWS account id, Google Cloud ORG Id, or other unique identifier.
       */
      id?: string;
      /**
       * The cloud account name or alias used to identify different entities in a multi-tenant environment.
       * Examples: AWS account name, Google Cloud ORG display name.
       */
      name?: string;
    };

    /**
     * Availability zone in which this host, resource, or service is located.
     */
    availability_zone?: string;
    instance?: {
      /**
       * Instance ID of the host machine.
       */
      id?: string;
      /**
       * Instance name of the host machine.
       */
      name?: string;
    };

    machine?: {
      /**
       * Machine type of the host machine.
       */
      type?: string;
    };

    project?: {
      /**
       * The cloud project identifier.
       * Examples: Google Cloud Project id, Azure Project id.
       */
      id?: string;
      /**
       * The cloud project name.
       * Examples: Google Cloud Project name, Azure Project name.
       */
      name?: string;
    };

    /**
     * Name of the cloud provider. Example values are aws, azure, gcp, or digitalocean.
     */
    provider?: string;
    /**
     * Region in which this host, resource, or service is located.
     */
    region?: string;
    service?: {
      /**
       * The cloud service name is intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.
       * Examples: app engine, app service, cloud run, fargate, lambda.
       */
      name?: string;
    };
  };
}
