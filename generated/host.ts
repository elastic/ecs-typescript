
export interface EcsHost {
  architecture?: string;
  cpu?: Cpu;
  disk?: Disk;
  domain?: string;
  geo?: Geo;
  hostname?: string;
  id?: string;
  ip?: string;
  mac?: string;
  name?: string;
  network?: Network;
  os?: Os;
  type?: string;
  uptime?: number;
}


interface Cpu {
  usage?: number;
}


interface Disk {
  read?: Read;
  write?: Write;
}


interface Read {
  bytes?: number;
}


interface Write {
  bytes?: number;
}


interface Geo {
  city_name?: string;
  continent_code?: string;
  continent_name?: string;
  country_iso_code?: string;
  country_name?: string;
  location?: { lat: number; lon: number };
  name?: string;
  postal_code?: string;
  region_iso_code?: string;
  region_name?: string;
  timezone?: string;
}


interface Network {
  egress?: Egress;
  ingress?: Ingress;
}


interface Egress {
  bytes?: number;
  packets?: number;
}


interface Ingress {
  bytes?: number;
  packets?: number;
}


interface Os {
  family?: string;
  full?: string;
  kernel?: string;
  name?: string;
  platform?: string;
  type?: string;
  version?: string;
}

