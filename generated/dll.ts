
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
  imphash?: string;
  original_file_name?: string;
  pehash?: string;
  product?: string;
}

