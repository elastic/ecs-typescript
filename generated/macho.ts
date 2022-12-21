export interface EcsMacho {
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
