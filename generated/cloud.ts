export interface EcsCloud {
  account?: Account;
  availability_zone?: string;
  instance?: Instance;
  machine?: Machine;
  origin?: Origin;
  project?: Project;
  provider?: string;
  region?: string;
  service?: Service;
  target?: Target;
}

interface Account {
  id?: string;
  name?: string;
}

interface Instance {
  id?: string;
  name?: string;
}

interface Machine {
  type?: string;
}

interface Origin {
  account?: Account;
  availability_zone?: string;
  instance?: Instance;
  machine?: Machine;
  project?: Project;
  provider?: string;
  region?: string;
  service?: Service;
}

interface Account {
  id?: string;
  name?: string;
}

interface Instance {
  id?: string;
  name?: string;
}

interface Machine {
  type?: string;
}

interface Project {
  id?: string;
  name?: string;
}

interface Service {
  name?: string;
}

interface Project {
  id?: string;
  name?: string;
}

interface Service {
  name?: string;
}

interface Target {
  account?: Account;
  availability_zone?: string;
  instance?: Instance;
  machine?: Machine;
  project?: Project;
  provider?: string;
  region?: string;
  service?: Service;
}

interface Account {
  id?: string;
  name?: string;
}

interface Instance {
  id?: string;
  name?: string;
}

interface Machine {
  type?: string;
}

interface Project {
  id?: string;
  name?: string;
}

interface Service {
  name?: string;
}
