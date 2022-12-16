export interface EcsTls {
  cipher?: string;
  client?: Client;
  curve?: string;
  established?: boolean;
  next_protocol?: string;
  resumed?: boolean;
  server?: Server;
  version?: string;
  version_protocol?: string;
}

interface Client {
  certificate?: string;
  certificate_chain?: string;
  hash?: Hash;
  issuer?: string;
  ja3?: string;
  not_after?: string;
  not_before?: string;
  server_name?: string;
  subject?: string;
  supported_ciphers?: string;
  x509?: X509;
}

interface Hash {
  md5?: string;
  sha1?: string;
  sha256?: string;
}

interface X509 {
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

interface Server {
  certificate?: string;
  certificate_chain?: string;
  hash?: Hash;
  issuer?: string;
  ja3s?: string;
  not_after?: string;
  not_before?: string;
  subject?: string;
  x509?: X509;
}

interface Hash {
  md5?: string;
  sha1?: string;
  sha256?: string;
}

interface X509 {
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
