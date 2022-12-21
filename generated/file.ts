export interface EcsFile {
  accessed?: string;
  attributes?: string;
  code_signature?: CodeSignature;
  created?: string;
  ctime?: string;
  device?: string;
  directory?: string;
  drive_letter?: string;
  elf?: Elf;
  extension?: string;
  fork_name?: string;
  gid?: string;
  group?: string;
  hash?: Hash;
  inode?: string;
  macho?: Macho;
  mime_type?: string;
  mode?: string;
  mtime?: string;
  name?: string;
  owner?: string;
  path?: string;
  pe?: Pe;
  size?: number;
  target_path?: string;
  type?: string;
  uid?: string;
  x509?: X509;
}

interface CodeSignature {
  digest_algorithm?: string;
  exists?: boolean;
  signing_id?: string;
  status?: string;
  subject_name?: string;
  team_id?: string;
  timestamp?: string;
  trusted?: boolean;
  valid?: boolean;
}

interface Elf {
  architecture?: string;
  byte_order?: string;
  cpu_type?: string;
  creation_date?: string;
  exports?: Record<string, unknown>;
  go_import_hash?: string;
  go_imports?: Record<string, unknown>;
  go_imports_names_entropy?: number;
  go_imports_names_var_entropy?: number;
  go_stripped?: boolean;
  header?: Header;
  import_hash?: string;
  imports?: Record<string, unknown>;
  imports_names_entropy?: number;
  imports_names_var_entropy?: number;
  sections?: Record<string, unknown>;
  segments?: Record<string, unknown>;
  shared_libraries?: string;
  telfhash?: string;
}

interface Header {
  abi_version?: string;
  class?: string;
  data?: string;
  entrypoint?: number;
  object_version?: string;
  os_abi?: string;
  type?: string;
  version?: string;
}

interface Hash {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha384?: string;
  sha512?: string;
  ssdeep?: string;
  tlsh?: string;
}

interface Macho {
  go_import_hash?: string;
  go_imports?: Record<string, unknown>;
  go_imports_names_entropy?: number;
  go_imports_names_var_entropy?: number;
  go_stripped?: boolean;
  import_hash?: string;
  imports?: Record<string, unknown>;
  imports_names_entropy?: number;
  imports_names_var_entropy?: number;
  sections?: Record<string, unknown>;
  symhash?: string;
}

interface Pe {
  architecture?: string;
  company?: string;
  description?: string;
  file_version?: string;
  go_import_hash?: string;
  go_imports?: Record<string, unknown>;
  go_imports_names_entropy?: number;
  go_imports_names_var_entropy?: number;
  go_stripped?: boolean;
  imphash?: string;
  import_hash?: string;
  imports?: Record<string, unknown>;
  imports_names_entropy?: number;
  imports_names_var_entropy?: number;
  original_file_name?: string;
  pehash?: string;
  product?: string;
  sections?: Record<string, unknown>;
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
