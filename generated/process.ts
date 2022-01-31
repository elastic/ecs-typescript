
export interface EcsProcess {
  args?: string;
  args_count?: number;
  code_signature?: CodeSignature;
  command_line?: string;
  elf?: Elf;
  end?: string;
  entity_id?: string;
  executable?: string;
  exit_code?: number;
  hash?: Hash;
  name?: string;
  parent?: Parent;
  pe?: Pe;
  pgid?: number;
  pid?: number;
  start?: string;
  thread?: Thread;
  title?: string;
  uptime?: number;
  working_directory?: string;
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
  header?: Header;
  imports?: Record<string, unknown>;
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


interface Parent {
  args?: string;
  args_count?: number;
  code_signature?: CodeSignature;
  command_line?: string;
  elf?: Elf;
  end?: string;
  entity_id?: string;
  executable?: string;
  exit_code?: number;
  hash?: Hash;
  name?: string;
  pe?: Pe;
  pgid?: number;
  pid?: number;
  start?: string;
  thread?: Thread;
  title?: string;
  uptime?: number;
  working_directory?: string;
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
  header?: Header;
  imports?: Record<string, unknown>;
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


interface Thread {
  id?: number;
  name?: string;
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


interface Thread {
  id?: number;
  name?: string;
}

