
export interface EcsRegistry {
  data?: Data;
  hive?: string;
  key?: string;
  path?: string;
  value?: string;
}


interface Data {
  bytes?: string;
  strings?: string;
  type?: string;
}

