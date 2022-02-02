
export interface EcsObserver {
  egress?: Record<string, unknown>;
  geo?: Geo;
  hostname?: string;
  ingress?: Record<string, unknown>;
  ip?: string;
  mac?: string;
  name?: string;
  os?: Os;
  product?: string;
  serial_number?: string;
  type?: string;
  vendor?: string;
  version?: string;
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


interface Os {
  family?: string;
  full?: string;
  kernel?: string;
  name?: string;
  platform?: string;
  type?: string;
  version?: string;
}

