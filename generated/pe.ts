export interface EcsPe {
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
