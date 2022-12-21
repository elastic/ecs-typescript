export interface EcsOrchestrator {
  api_version?: string;
  cluster?: Cluster;
  namespace?: string;
  organization?: string;
  resource?: Resource;
  type?: string;
}

interface Cluster {
  id?: string;
  name?: string;
  url?: string;
  version?: string;
}

interface Resource {
  id?: string;
  ip?: string;
  name?: string;
  parent?: Parent;
  type?: string;
}

interface Parent {
  type?: string;
}
