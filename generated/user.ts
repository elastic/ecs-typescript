
export interface EcsUser {
  changes?: Changes;
  domain?: string;
  effective?: Effective;
  email?: string;
  full_name?: string;
  group?: Group;
  hash?: string;
  id?: string;
  name?: string;
  roles?: string;
  target?: Target;
}


interface Changes {
  domain?: string;
  email?: string;
  full_name?: string;
  group?: Group;
  hash?: string;
  id?: string;
  name?: string;
  roles?: string;
}


interface Group {
  domain?: string;
  id?: string;
  name?: string;
}


interface Effective {
  domain?: string;
  email?: string;
  full_name?: string;
  group?: Group;
  hash?: string;
  id?: string;
  name?: string;
  roles?: string;
}


interface Group {
  domain?: string;
  id?: string;
  name?: string;
}


interface Group {
  domain?: string;
  id?: string;
  name?: string;
}


interface Target {
  domain?: string;
  email?: string;
  full_name?: string;
  group?: Group;
  hash?: string;
  id?: string;
  name?: string;
  roles?: string;
}


interface Group {
  domain?: string;
  id?: string;
  name?: string;
}

