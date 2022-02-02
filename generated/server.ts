
export interface EcsServer {
  address?: string;
  as?: As;
  bytes?: number;
  domain?: string;
  geo?: Geo;
  ip?: string;
  mac?: string;
  nat?: Nat;
  packets?: number;
  port?: number;
  registered_domain?: string;
  subdomain?: string;
  top_level_domain?: string;
  user?: User;
}


interface As {
  number?: number;
  organization?: Organization;
}


interface Organization {
  name?: string;
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


interface Nat {
  ip?: string;
  port?: number;
}


interface User {
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

