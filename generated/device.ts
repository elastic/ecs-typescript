export interface EcsDevice {
  id?: string;
  manufacturer?: string;
  model?: Model;
}

interface Model {
  identifier?: string;
  name?: string;
}
