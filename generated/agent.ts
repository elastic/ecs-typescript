export interface EcsAgent {
  build?: Build;
  ephemeral_id?: string;
  id?: string;
  name?: string;
  type?: string;
  version?: string;
}

interface Build {
  original?: string;
}
