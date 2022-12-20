
export interface EcsX509 {
  alternative_names?: string;
  issuer?: Issuer;
  not_after?: string;
  not_before?: string;
  public_key_algorithm?: string;
  public_key_curve?: string;
  public_key_exponent?: number;
  public_key_size?: number;
  serial_number?: string;
  signature_algorithm?: string;
  subject?: Subject;
  version_number?: string;
}


interface Issuer {
  common_name?: string;
  country?: string;
  distinguished_name?: string;
  locality?: string;
  organization?: string;
  organizational_unit?: string;
  state_or_province?: string;
}


interface Subject {
  common_name?: string;
  country?: string;
  distinguished_name?: string;
  locality?: string;
  organization?: string;
  organizational_unit?: string;
  state_or_province?: string;
}

