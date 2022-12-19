/**
 * Fields that describe the resources which container orchestrators manage or act upon.
 */
export interface EcsOrchestrator {
  /**
   * API version being used to carry out the action
   */
  api_version?: string;
  cluster?: Cluster;
  /**
   * Namespace in which the action is taking place.
   */
  namespace?: string;
  /**
   * Organization affected by the event (for multi-tenant orchestrator setups).
   */
  organization?: string;
  resource?: Resource;
  /**
   * Orchestrator cluster type (e.g. kubernetes, nomad or cloudfoundry).
   */
  type?: string;
}

interface Cluster {
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
}

interface Resource {
  /**
   * Unique ID of the resource being acted upon.
   */
  id?: string;
  /**
   * IP address assigned to the resource associated with the event being observed. In the case of a Kubernetes Pod, this array would contain only one element: the IP of the Pod (as opposed to the Node on which the Pod is running).
   */
  ip?: string;
  /**
   * Name of the resource being acted upon.
   */
  name?: string;
  parent?: Parent;
  /**
   * Type of resource being acted upon.
   */
  type?: string;
}

interface Parent {
  /**
   * Type or kind of the parent resource associated with the event being observed. In Kubernetes, this will be the name of a built-in workload resource (e.g., Deployment, StatefulSet, DaemonSet).
   */
  type?: string;
}
