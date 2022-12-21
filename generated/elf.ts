export interface EcsElf {
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
