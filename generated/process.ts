export interface EcsProcess {
  args?: string;
  args_count?: number;
  code_signature?: CodeSignature;
  command_line?: string;
  elf?: Elf;
  end?: string;
  entity_id?: string;
  entry_leader?: EntryLeader;
  env_vars?: string;
  executable?: string;
  exit_code?: number;
  group_leader?: GroupLeader;
  hash?: Hash;
  interactive?: boolean;
  io?: Record<string, unknown>;
  macho?: Macho;
  name?: string;
  parent?: Parent;
  pe?: Pe;
  pgid?: number;
  pid?: number;
  previous?: Previous;
  real_group?: RealGroup;
  real_user?: RealUser;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  session_leader?: SessionLeader;
  start?: string;
  supplemental_groups?: SupplementalGroups;
  thread?: Thread;
  title?: string;
  tty?: Record<string, unknown>;
  uptime?: number;
  user?: User;
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

interface EntryLeader {
  args?: string;
  args_count?: number;
  attested_groups?: AttestedGroups;
  attested_user?: AttestedUser;
  command_line?: string;
  entity_id?: string;
  entry_meta?: EntryMeta;
  executable?: string;
  group?: Group;
  interactive?: boolean;
  name?: string;
  parent?: Parent;
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  same_as_process?: boolean;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  start?: string;
  supplemental_groups?: SupplementalGroups;
  tty?: Record<string, unknown>;
  user?: User;
  working_directory?: string;
}

interface AttestedGroups {
  name?: string;
}

interface AttestedUser {
  id?: string;
  name?: string;
}

interface EntryMeta {
  source?: Source;
  type?: string;
}

interface Source {
  ip?: string;
}

interface Group {
  id?: string;
  name?: string;
}

interface Parent {
  entity_id?: string;
  pid?: number;
  session_leader?: SessionLeader;
  start?: string;
}

interface SessionLeader {
  entity_id?: string;
  pid?: number;
  start?: string;
}

interface RealGroup {
  id?: string;
  name?: string;
}

interface RealUser {
  id?: string;
  name?: string;
}

interface SavedGroup {
  id?: string;
  name?: string;
}

interface SavedUser {
  id?: string;
  name?: string;
}

interface SupplementalGroups {
  id?: string;
  name?: string;
}

interface User {
  id?: string;
  name?: string;
}

interface GroupLeader {
  args?: string;
  args_count?: number;
  command_line?: string;
  entity_id?: string;
  executable?: string;
  group?: Group;
  interactive?: boolean;
  name?: string;
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  same_as_process?: boolean;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  start?: string;
  supplemental_groups?: SupplementalGroups;
  tty?: Record<string, unknown>;
  user?: User;
  working_directory?: string;
}

interface Group {
  id?: string;
  name?: string;
}

interface RealGroup {
  id?: string;
  name?: string;
}

interface RealUser {
  id?: string;
  name?: string;
}

interface SavedGroup {
  id?: string;
  name?: string;
}

interface SavedUser {
  id?: string;
  name?: string;
}

interface SupplementalGroups {
  id?: string;
  name?: string;
}

interface User {
  id?: string;
  name?: string;
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
  group?: Group;
  group_leader?: GroupLeader;
  hash?: Hash;
  interactive?: boolean;
  macho?: Macho;
  name?: string;
  pe?: Pe;
  pgid?: number;
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  start?: string;
  supplemental_groups?: SupplementalGroups;
  thread?: Thread;
  title?: string;
  tty?: Record<string, unknown>;
  uptime?: number;
  user?: User;
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

interface Group {
  id?: string;
  name?: string;
}

interface GroupLeader {
  entity_id?: string;
  pid?: number;
  start?: string;
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

interface RealGroup {
  id?: string;
  name?: string;
}

interface RealUser {
  id?: string;
  name?: string;
}

interface SavedGroup {
  id?: string;
  name?: string;
}

interface SavedUser {
  id?: string;
  name?: string;
}

interface SupplementalGroups {
  id?: string;
  name?: string;
}

interface Thread {
  id?: number;
  name?: string;
}

interface User {
  id?: string;
  name?: string;
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

interface Previous {
  args?: string;
  args_count?: number;
  executable?: string;
}

interface RealGroup {
  id?: string;
  name?: string;
}

interface RealUser {
  id?: string;
  name?: string;
}

interface SavedGroup {
  id?: string;
  name?: string;
}

interface SavedUser {
  id?: string;
  name?: string;
}

interface SessionLeader {
  args?: string;
  args_count?: number;
  command_line?: string;
  entity_id?: string;
  executable?: string;
  group?: Group;
  interactive?: boolean;
  name?: string;
  parent?: Parent;
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  same_as_process?: boolean;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  start?: string;
  supplemental_groups?: SupplementalGroups;
  tty?: Record<string, unknown>;
  user?: User;
  working_directory?: string;
}

interface Group {
  id?: string;
  name?: string;
}

interface Parent {
  entity_id?: string;
  pid?: number;
  session_leader?: SessionLeader;
  start?: string;
}

interface SessionLeader {
  entity_id?: string;
  pid?: number;
  start?: string;
}

interface RealGroup {
  id?: string;
  name?: string;
}

interface RealUser {
  id?: string;
  name?: string;
}

interface SavedGroup {
  id?: string;
  name?: string;
}

interface SavedUser {
  id?: string;
  name?: string;
}

interface SupplementalGroups {
  id?: string;
  name?: string;
}

interface User {
  id?: string;
  name?: string;
}

interface SupplementalGroups {
  id?: string;
  name?: string;
}

interface Thread {
  id?: number;
  name?: string;
}

interface User {
  id?: string;
  name?: string;
}
