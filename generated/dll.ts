export interface EcsDll {
  code_signature?: CodeSignature;
  hash?: Hash;
  name?: string;
  path?: string;
  pe?: Pe;
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

interface Hash {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha384?: string;
  sha512?: string;
  ssdeep?: string;
  tlsh?: string;
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
