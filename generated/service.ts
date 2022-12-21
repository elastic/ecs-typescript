export interface EcsService {
  address?: string;
  environment?: string;
  ephemeral_id?: string;
  id?: string;
  name?: string;
  node?: Node;
  origin?: Origin;
  state?: string;
  target?: Target;
  type?: string;
  version?: string;
}

interface Node {
  name?: string;
  role?: string;
  roles?: string;
}

interface Origin {
  address?: string;
  environment?: string;
  ephemeral_id?: string;
  id?: string;
  name?: string;
  node?: Node;
  state?: string;
  type?: string;
  version?: string;
}

interface Node {
  name?: string;
  role?: string;
  roles?: string;
}

interface Target {
  address?: string;
  environment?: string;
  ephemeral_id?: string;
  id?: string;
  name?: string;
  node?: Node;
  state?: string;
  type?: string;
  version?: string;
}

interface Node {
  name?: string;
  role?: string;
  roles?: string;
}
