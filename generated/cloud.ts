/**
 * Fields related to the cloud or infrastructure the events are coming from.
 */
export interface EcsCloud {
  account?: Account;
  /**
   * Availability zone in which this host, resource, or service is located.
   */
  availability_zone?: string;
  instance?: Instance;
  machine?: Machine;
  origin?: Origin;
  project?: Project;
  /**
   * Name of the cloud provider. Example values are aws, azure, gcp, or digitalocean.
   */
  provider?: string;
  /**
   * Region in which this host, resource, or service is located.
   */
  region?: string;
  service?: Service;
  target?: Target;
}

interface Account {
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
}

interface Instance {
  /**
   * Instance ID of the host machine.
   */
  id?: string;
  /**
   * Instance name of the host machine.
   */
  name?: string;
}

interface Machine {
  /**
   * Machine type of the host machine.
   */
  type?: string;
}

interface Origin {
  account?: Account;
  /**
   * Availability zone in which this host, resource, or service is located.
   */
  availability_zone?: string;
  instance?: Instance;
  machine?: Machine;
  project?: Project;
  /**
   * Name of the cloud provider. Example values are aws, azure, gcp, or digitalocean.
   */
  provider?: string;
  /**
   * Region in which this host, resource, or service is located.
   */
  region?: string;
  service?: Service;
}

interface Account {
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
}

interface Instance {
  /**
   * Instance ID of the host machine.
   */
  id?: string;
  /**
   * Instance name of the host machine.
   */
  name?: string;
}

interface Machine {
  /**
   * Machine type of the host machine.
   */
  type?: string;
}

interface Project {
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
}

interface Service {
  /**
   * The cloud service name is intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.
   * Examples: app engine, app service, cloud run, fargate, lambda.
   */
  name?: string;
}

interface Project {
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
}

interface Service {
  /**
   * The cloud service name is intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.
   * Examples: app engine, app service, cloud run, fargate, lambda.
   */
  name?: string;
}

interface Target {
  account?: Account;
  /**
   * Availability zone in which this host, resource, or service is located.
   */
  availability_zone?: string;
  instance?: Instance;
  machine?: Machine;
  project?: Project;
  /**
   * Name of the cloud provider. Example values are aws, azure, gcp, or digitalocean.
   */
  provider?: string;
  /**
   * Region in which this host, resource, or service is located.
   */
  region?: string;
  service?: Service;
}

interface Account {
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
}

interface Instance {
  /**
   * Instance ID of the host machine.
   */
  id?: string;
  /**
   * Instance name of the host machine.
   */
  name?: string;
}

interface Machine {
  /**
   * Machine type of the host machine.
   */
  type?: string;
}

interface Project {
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
}

interface Service {
  /**
   * The cloud service name is intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.
   * Examples: app engine, app service, cloud run, fargate, lambda.
   */
  name?: string;
}
