
export interface EcsOrchestrator {
  api_version?: string;
  cluster?: Cluster;
  namespace?: string;
  organization?: string;
  resource?: Resource;
  type?: string;
}


interface Cluster {
  name?: string;
  url?: string;
  version?: string;
}


interface Resource {
  name?: string;
  type?: string;
}

