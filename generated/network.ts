
export interface EcsNetwork {
  application?: string;
  bytes?: number;
  community_id?: string;
  direction?: string;
  forwarded_ip?: string;
  iana_number?: string;
  inner?: Record<string, unknown>;
  name?: string;
  packets?: number;
  protocol?: string;
  transport?: string;
  type?: string;
  vlan?: Vlan;
}


interface Vlan {
  id?: string;
  name?: string;
}

