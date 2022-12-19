/**
 * These fields contain information about a process.
 * These fields can help you correlate metrics information with a process id/name from a log message.  The `process.pid` often stays in the metric itself and is copied to the global field for correlation.
 */
export interface EcsProcess {
  /**
   * Array of process arguments, starting with the absolute path to the executable.
   * May be filtered to protect sensitive information.
   */
  args?: string;
  /**
   * Length of the process.args array.
   * This field can be useful for querying or performing bucket analysis on how many arguments were provided to start a process. More arguments may be an indication of suspicious activity.
   */
  args_count?: number;
  code_signature?: CodeSignature;
  /**
   * Full command line that started the process, including the absolute path to the executable, and all arguments.
   * Some arguments may be filtered to protect sensitive information.
   */
  command_line?: string;
  elf?: Elf;
  /**
   * The time the process ended.
   */
  end?: string;
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  entry_leader?: EntryLeader;
  /**
   * Array of environment variable bindings. Captured from a snapshot of the environment at the time of execution.
   * May be filtered to protect sensitive information.
   */
  env_vars?: string;
  /**
   * Absolute path to the process executable.
   */
  executable?: string;
  /**
   * The exit code of the process, if this is a termination event.
   * The field should be absent if there is no exit code for the event (e.g. process start).
   */
  exit_code?: number;
  group_leader?: GroupLeader;
  hash?: Hash;
  /**
   * Whether the process is connected to an interactive shell.
   * Process interactivity is inferred from the processes file descriptors. If the character device for the controlling tty is the same as stdin and stderr for the process, the process is considered interactive.
   * Note: A non-interactive process can belong to an interactive session and is simply one that does not have open file descriptors reading the controlling TTY on FD 0 (stdin) or writing to the controlling TTY on FD 2 (stderr). A backgrounded process is still considered interactive if stdin and stderr are connected to the controlling TTY.
   */
  interactive?: boolean;
  /**
   * A chunk of input or output (IO) from a single process.
   * This field only appears on the top level process object, which is the process that wrote the output or read the input.
   */
  io?: Record<string, unknown>;
  macho?: Macho;
  /**
   * Process name.
   * Sometimes called program name or similar.
   */
  name?: string;
  parent?: Parent;
  pe?: Pe;
  /**
   * Deprecated for removal in next major version release. This field is superseded by `process.group_leader.pid`.
   * Identifier of the group of processes the process belongs to.
   */
  pgid?: number;
  /**
   * Process id.
   */
  pid?: number;
  previous?: Previous;
  real_group?: RealGroup;
  real_user?: RealUser;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  session_leader?: SessionLeader;
  /**
   * The time the process started.
   */
  start?: string;
  supplemental_groups?: SupplementalGroups;
  thread?: Thread;
  /**
   * Process title.
   * The proctitle, some times the same as process name. Can also be different: for example a browser setting its title to the web page currently opened.
   */
  title?: string;
  /**
   * Information about the controlling TTY device. If set, the process belongs to an interactive session.
   */
  tty?: Record<string, unknown>;
  /**
   * Seconds the process has been up.
   */
  uptime?: number;
  user?: User;
  /**
   * The working directory of the process.
   */
  working_directory?: string;
}

interface CodeSignature {
  /**
   * The hashing algorithm used to sign the process.
   * This value can distinguish signatures when a file is signed multiple times by the same signer but with a different digest algorithm.
   */
  digest_algorithm?: string;
  /**
   * Boolean to capture if a signature is present.
   */
  exists?: boolean;
  /**
   * The identifier used to sign the process.
   * This is used to identify the application manufactured by a software vendor. The field is relevant to Apple *OS only.
   */
  signing_id?: string;
  /**
   * Additional information about the certificate status.
   * This is useful for logging cryptographic errors with the certificate validity or trust status. Leave unpopulated if the validity or trust of the certificate was unchecked.
   */
  status?: string;
  /**
   * Subject name of the code signer
   */
  subject_name?: string;
  /**
   * The team identifier used to sign the process.
   * This is used to identify the team or vendor of a software product. The field is relevant to Apple *OS only.
   */
  team_id?: string;
  /**
   * Date and time when the code signature was generated and signed.
   */
  timestamp?: string;
  /**
   * Stores the trust status of the certificate chain.
   * Validating the trust of the certificate chain may be complicated, and this field should only be populated by tools that actively check the status.
   */
  trusted?: boolean;
  /**
   * Boolean to capture if the digital signature is verified against the binary content.
   * Leave unpopulated if a certificate was unchecked.
   */
  valid?: boolean;
}

interface Elf {
  /**
   * Machine architecture of the ELF file.
   */
  architecture?: string;
  /**
   * Byte sequence of ELF file.
   */
  byte_order?: string;
  /**
   * CPU type of the ELF file.
   */
  cpu_type?: string;
  /**
   * Extracted when possible from the file's metadata. Indicates when it was built or compiled. It can also be faked by malware creators.
   */
  creation_date?: string;
  /**
   * List of exported element names and types.
   */
  exports?: Record<string, unknown>;
  /**
   * A hash of the Go language imports in an ELF file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available [here](https://github.com/elastic/toutoumomoma).
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  header?: Header;
  /**
   * A hash of the imports in an ELF file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is an ELF implementation of the Windows PE imphash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * An array containing an object for each section of the ELF file.
   * The keys that should be present in these objects are defined by sub-fields underneath `elf.sections.*`.
   */
  sections?: Record<string, unknown>;
  /**
   * An array containing an object for each segment of the ELF file.
   * The keys that should be present in these objects are defined by sub-fields underneath `elf.segments.*`.
   */
  segments?: Record<string, unknown>;
  /**
   * List of shared libraries used by this ELF object.
   */
  shared_libraries?: string;
  /**
   * telfhash symbol hash for ELF file.
   */
  telfhash?: string;
}

interface Header {
  /**
   * Version of the ELF Application Binary Interface (ABI).
   */
  abi_version?: string;
  /**
   * Header class of the ELF file.
   */
  class?: string;
  /**
   * Data table of the ELF header.
   */
  data?: string;
  /**
   * Header entrypoint of the ELF file.
   */
  entrypoint?: number;
  /**
   * "0x1" for original ELF files.
   */
  object_version?: string;
  /**
   * Application Binary Interface (ABI) of the Linux OS.
   */
  os_abi?: string;
  /**
   * Header type of the ELF file.
   */
  type?: string;
  /**
   * Version of the ELF header.
   */
  version?: string;
}

interface EntryLeader {
  /**
   * Array of process arguments, starting with the absolute path to the executable.
   * May be filtered to protect sensitive information.
   */
  args?: string;
  /**
   * Length of the process.args array.
   * This field can be useful for querying or performing bucket analysis on how many arguments were provided to start a process. More arguments may be an indication of suspicious activity.
   */
  args_count?: number;
  attested_groups?: AttestedGroups;
  attested_user?: AttestedUser;
  /**
   * Full command line that started the process, including the absolute path to the executable, and all arguments.
   * Some arguments may be filtered to protect sensitive information.
   */
  command_line?: string;
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  entry_meta?: EntryMeta;
  /**
   * Absolute path to the process executable.
   */
  executable?: string;
  group?: Group;
  /**
   * Whether the process is connected to an interactive shell.
   * Process interactivity is inferred from the processes file descriptors. If the character device for the controlling tty is the same as stdin and stderr for the process, the process is considered interactive.
   * Note: A non-interactive process can belong to an interactive session and is simply one that does not have open file descriptors reading the controlling TTY on FD 0 (stdin) or writing to the controlling TTY on FD 2 (stderr). A backgrounded process is still considered interactive if stdin and stderr are connected to the controlling TTY.
   */
  interactive?: boolean;
  /**
   * Process name.
   * Sometimes called program name or similar.
   */
  name?: string;
  parent?: Parent;
  /**
   * Process id.
   */
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  /**
   * This boolean is used to identify if a leader process is the same as the top level process.
   * For example, if `process.group_leader.same_as_process = true`, it means the process event in question is the leader of its process group. Details under `process.*` like `pid` would be the same under `process.group_leader.*` The same applies for both `process.session_leader` and `process.entry_leader`.
   * This field exists to the benefit of EQL and other rule engines since it's not possible to compare equality between two fields in a single document. e.g `process.entity_id` = `process.group_leader.entity_id` (top level process is the process group leader) OR `process.entity_id` = `process.entry_leader.entity_id` (top level process is the entry session leader)
   * Instead these rules could be written like: `process.group_leader.same_as_process: true` OR `process.entry_leader.same_as_process: true`
   * Note: This field is only set on `process.entry_leader`, `process.session_leader` and `process.group_leader`.
   */
  same_as_process?: boolean;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  /**
   * The time the process started.
   */
  start?: string;
  supplemental_groups?: SupplementalGroups;
  /**
   * Information about the controlling TTY device. If set, the process belongs to an interactive session.
   */
  tty?: Record<string, unknown>;
  user?: User;
  /**
   * The working directory of the process.
   */
  working_directory?: string;
}

interface AttestedGroups {
  /**
   * Name of the group.
   */
  name?: string;
}

interface AttestedUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface EntryMeta {
  source?: Source;
  /**
   * The entry type for the entry session leader. Values include: init(e.g systemd), sshd, ssm, kubelet, teleport, terminal, console
   * Note: This field is only set on process.session_leader.
   */
  type?: string;
}

interface Source {
  /**
   * IP address of the source (IPv4 or IPv6).
   */
  ip?: string;
}

interface Group {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface Parent {
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Process id.
   */
  pid?: number;
  session_leader?: SessionLeader;
  /**
   * The time the process started.
   */
  start?: string;
}

interface SessionLeader {
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Process id.
   */
  pid?: number;
  /**
   * The time the process started.
   */
  start?: string;
}

interface RealGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface RealUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SavedGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface SavedUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SupplementalGroups {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface User {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface GroupLeader {
  /**
   * Array of process arguments, starting with the absolute path to the executable.
   * May be filtered to protect sensitive information.
   */
  args?: string;
  /**
   * Length of the process.args array.
   * This field can be useful for querying or performing bucket analysis on how many arguments were provided to start a process. More arguments may be an indication of suspicious activity.
   */
  args_count?: number;
  /**
   * Full command line that started the process, including the absolute path to the executable, and all arguments.
   * Some arguments may be filtered to protect sensitive information.
   */
  command_line?: string;
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Absolute path to the process executable.
   */
  executable?: string;
  group?: Group;
  /**
   * Whether the process is connected to an interactive shell.
   * Process interactivity is inferred from the processes file descriptors. If the character device for the controlling tty is the same as stdin and stderr for the process, the process is considered interactive.
   * Note: A non-interactive process can belong to an interactive session and is simply one that does not have open file descriptors reading the controlling TTY on FD 0 (stdin) or writing to the controlling TTY on FD 2 (stderr). A backgrounded process is still considered interactive if stdin and stderr are connected to the controlling TTY.
   */
  interactive?: boolean;
  /**
   * Process name.
   * Sometimes called program name or similar.
   */
  name?: string;
  /**
   * Process id.
   */
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  /**
   * This boolean is used to identify if a leader process is the same as the top level process.
   * For example, if `process.group_leader.same_as_process = true`, it means the process event in question is the leader of its process group. Details under `process.*` like `pid` would be the same under `process.group_leader.*` The same applies for both `process.session_leader` and `process.entry_leader`.
   * This field exists to the benefit of EQL and other rule engines since it's not possible to compare equality between two fields in a single document. e.g `process.entity_id` = `process.group_leader.entity_id` (top level process is the process group leader) OR `process.entity_id` = `process.entry_leader.entity_id` (top level process is the entry session leader)
   * Instead these rules could be written like: `process.group_leader.same_as_process: true` OR `process.entry_leader.same_as_process: true`
   * Note: This field is only set on `process.entry_leader`, `process.session_leader` and `process.group_leader`.
   */
  same_as_process?: boolean;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  /**
   * The time the process started.
   */
  start?: string;
  supplemental_groups?: SupplementalGroups;
  /**
   * Information about the controlling TTY device. If set, the process belongs to an interactive session.
   */
  tty?: Record<string, unknown>;
  user?: User;
  /**
   * The working directory of the process.
   */
  working_directory?: string;
}

interface Group {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface RealGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface RealUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SavedGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface SavedUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SupplementalGroups {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface User {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface Hash {
  /**
   * MD5 hash.
   */
  md5?: string;
  /**
   * SHA1 hash.
   */
  sha1?: string;
  /**
   * SHA256 hash.
   */
  sha256?: string;
  /**
   * SHA384 hash.
   */
  sha384?: string;
  /**
   * SHA512 hash.
   */
  sha512?: string;
  /**
   * SSDEEP hash.
   */
  ssdeep?: string;
  /**
   * TLSH hash.
   */
  tlsh?: string;
}

interface Macho {
  /**
   * A hash of the Go language imports in a Mach-O file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available [here](https://github.com/elastic/toutoumomoma).
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  /**
   * A hash of the imports in a Mach-O file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a synonym for symhash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * An array containing an object for each section of the Mach-O file.
   * The keys that should be present in these objects are defined by sub-fields underneath `macho.sections.*`.
   */
  sections?: Record<string, unknown>;
  /**
   * A hash of the imports in a Mach-O file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a Mach-O implementation of the Windows PE imphash
   */
  symhash?: string;
}

interface Parent {
  /**
   * Array of process arguments, starting with the absolute path to the executable.
   * May be filtered to protect sensitive information.
   */
  args?: string;
  /**
   * Length of the process.args array.
   * This field can be useful for querying or performing bucket analysis on how many arguments were provided to start a process. More arguments may be an indication of suspicious activity.
   */
  args_count?: number;
  code_signature?: CodeSignature;
  /**
   * Full command line that started the process, including the absolute path to the executable, and all arguments.
   * Some arguments may be filtered to protect sensitive information.
   */
  command_line?: string;
  elf?: Elf;
  /**
   * The time the process ended.
   */
  end?: string;
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Absolute path to the process executable.
   */
  executable?: string;
  /**
   * The exit code of the process, if this is a termination event.
   * The field should be absent if there is no exit code for the event (e.g. process start).
   */
  exit_code?: number;
  group?: Group;
  group_leader?: GroupLeader;
  hash?: Hash;
  /**
   * Whether the process is connected to an interactive shell.
   * Process interactivity is inferred from the processes file descriptors. If the character device for the controlling tty is the same as stdin and stderr for the process, the process is considered interactive.
   * Note: A non-interactive process can belong to an interactive session and is simply one that does not have open file descriptors reading the controlling TTY on FD 0 (stdin) or writing to the controlling TTY on FD 2 (stderr). A backgrounded process is still considered interactive if stdin and stderr are connected to the controlling TTY.
   */
  interactive?: boolean;
  macho?: Macho;
  /**
   * Process name.
   * Sometimes called program name or similar.
   */
  name?: string;
  pe?: Pe;
  /**
   * Deprecated for removal in next major version release. This field is superseded by `process.group_leader.pid`.
   * Identifier of the group of processes the process belongs to.
   */
  pgid?: number;
  /**
   * Process id.
   */
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  /**
   * The time the process started.
   */
  start?: string;
  supplemental_groups?: SupplementalGroups;
  thread?: Thread;
  /**
   * Process title.
   * The proctitle, some times the same as process name. Can also be different: for example a browser setting its title to the web page currently opened.
   */
  title?: string;
  /**
   * Information about the controlling TTY device. If set, the process belongs to an interactive session.
   */
  tty?: Record<string, unknown>;
  /**
   * Seconds the process has been up.
   */
  uptime?: number;
  user?: User;
  /**
   * The working directory of the process.
   */
  working_directory?: string;
}

interface CodeSignature {
  /**
   * The hashing algorithm used to sign the process.
   * This value can distinguish signatures when a file is signed multiple times by the same signer but with a different digest algorithm.
   */
  digest_algorithm?: string;
  /**
   * Boolean to capture if a signature is present.
   */
  exists?: boolean;
  /**
   * The identifier used to sign the process.
   * This is used to identify the application manufactured by a software vendor. The field is relevant to Apple *OS only.
   */
  signing_id?: string;
  /**
   * Additional information about the certificate status.
   * This is useful for logging cryptographic errors with the certificate validity or trust status. Leave unpopulated if the validity or trust of the certificate was unchecked.
   */
  status?: string;
  /**
   * Subject name of the code signer
   */
  subject_name?: string;
  /**
   * The team identifier used to sign the process.
   * This is used to identify the team or vendor of a software product. The field is relevant to Apple *OS only.
   */
  team_id?: string;
  /**
   * Date and time when the code signature was generated and signed.
   */
  timestamp?: string;
  /**
   * Stores the trust status of the certificate chain.
   * Validating the trust of the certificate chain may be complicated, and this field should only be populated by tools that actively check the status.
   */
  trusted?: boolean;
  /**
   * Boolean to capture if the digital signature is verified against the binary content.
   * Leave unpopulated if a certificate was unchecked.
   */
  valid?: boolean;
}

interface Elf {
  /**
   * Machine architecture of the ELF file.
   */
  architecture?: string;
  /**
   * Byte sequence of ELF file.
   */
  byte_order?: string;
  /**
   * CPU type of the ELF file.
   */
  cpu_type?: string;
  /**
   * Extracted when possible from the file's metadata. Indicates when it was built or compiled. It can also be faked by malware creators.
   */
  creation_date?: string;
  /**
   * List of exported element names and types.
   */
  exports?: Record<string, unknown>;
  /**
   * A hash of the Go language imports in an ELF file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available [here](https://github.com/elastic/toutoumomoma).
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  header?: Header;
  /**
   * A hash of the imports in an ELF file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is an ELF implementation of the Windows PE imphash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * An array containing an object for each section of the ELF file.
   * The keys that should be present in these objects are defined by sub-fields underneath `elf.sections.*`.
   */
  sections?: Record<string, unknown>;
  /**
   * An array containing an object for each segment of the ELF file.
   * The keys that should be present in these objects are defined by sub-fields underneath `elf.segments.*`.
   */
  segments?: Record<string, unknown>;
  /**
   * List of shared libraries used by this ELF object.
   */
  shared_libraries?: string;
  /**
   * telfhash symbol hash for ELF file.
   */
  telfhash?: string;
}

interface Header {
  /**
   * Version of the ELF Application Binary Interface (ABI).
   */
  abi_version?: string;
  /**
   * Header class of the ELF file.
   */
  class?: string;
  /**
   * Data table of the ELF header.
   */
  data?: string;
  /**
   * Header entrypoint of the ELF file.
   */
  entrypoint?: number;
  /**
   * "0x1" for original ELF files.
   */
  object_version?: string;
  /**
   * Application Binary Interface (ABI) of the Linux OS.
   */
  os_abi?: string;
  /**
   * Header type of the ELF file.
   */
  type?: string;
  /**
   * Version of the ELF header.
   */
  version?: string;
}

interface Group {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface GroupLeader {
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Process id.
   */
  pid?: number;
  /**
   * The time the process started.
   */
  start?: string;
}

interface Hash {
  /**
   * MD5 hash.
   */
  md5?: string;
  /**
   * SHA1 hash.
   */
  sha1?: string;
  /**
   * SHA256 hash.
   */
  sha256?: string;
  /**
   * SHA384 hash.
   */
  sha384?: string;
  /**
   * SHA512 hash.
   */
  sha512?: string;
  /**
   * SSDEEP hash.
   */
  ssdeep?: string;
  /**
   * TLSH hash.
   */
  tlsh?: string;
}

interface Macho {
  /**
   * A hash of the Go language imports in a Mach-O file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available [here](https://github.com/elastic/toutoumomoma).
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  /**
   * A hash of the imports in a Mach-O file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a synonym for symhash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * An array containing an object for each section of the Mach-O file.
   * The keys that should be present in these objects are defined by sub-fields underneath `macho.sections.*`.
   */
  sections?: Record<string, unknown>;
  /**
   * A hash of the imports in a Mach-O file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a Mach-O implementation of the Windows PE imphash
   */
  symhash?: string;
}

interface Pe {
  /**
   * CPU architecture target for the file.
   */
  architecture?: string;
  /**
   * Internal company name of the file, provided at compile-time.
   */
  company?: string;
  /**
   * Internal description of the file, provided at compile-time.
   */
  description?: string;
  /**
   * Internal version of the file, provided at compile-time.
   */
  file_version?: string;
  /**
   * A hash of the Go language imports in a PE file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available [here](https://github.com/elastic/toutoumomoma).
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  /**
   * A hash of the imports in a PE file. An imphash -- or import hash -- can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * Learn more at https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html.
   */
  imphash?: string;
  /**
   * A hash of the imports in a PE file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a synonym for imphash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * Internal name of the file, provided at compile-time.
   */
  original_file_name?: string;
  /**
   * A hash of the PE header and data from one or more PE sections. An pehash can be used to cluster files by transforming structural information about a file into a hash value.
   * Learn more at https://www.usenix.org/legacy/events/leet09/tech/full_papers/wicherski/wicherski_html/index.html.
   */
  pehash?: string;
  /**
   * Internal product name of the file, provided at compile-time.
   */
  product?: string;
  /**
   * An array containing an object for each section of the PE file.
   * The keys that should be present in these objects are defined by sub-fields underneath `pe.sections.*`.
   */
  sections?: Record<string, unknown>;
}

interface RealGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface RealUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SavedGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface SavedUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SupplementalGroups {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface Thread {
  /**
   * Thread ID.
   */
  id?: number;
  /**
   * Thread name.
   */
  name?: string;
}

interface User {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface Pe {
  /**
   * CPU architecture target for the file.
   */
  architecture?: string;
  /**
   * Internal company name of the file, provided at compile-time.
   */
  company?: string;
  /**
   * Internal description of the file, provided at compile-time.
   */
  description?: string;
  /**
   * Internal version of the file, provided at compile-time.
   */
  file_version?: string;
  /**
   * A hash of the Go language imports in a PE file excluding standard library imports. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * The algorithm used to calculate the Go symbol hash and a reference implementation are available [here](https://github.com/elastic/toutoumomoma).
   */
  go_import_hash?: string;
  /**
   * List of imported Go language element names and types.
   */
  go_imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of Go imports.
   */
  go_imports_names_var_entropy?: number;
  /**
   * Set to true if the file is a Go executable that has had its symbols stripped or obfuscated and false if an unobfuscated Go executable.
   */
  go_stripped?: boolean;
  /**
   * A hash of the imports in a PE file. An imphash -- or import hash -- can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * Learn more at https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html.
   */
  imphash?: string;
  /**
   * A hash of the imports in a PE file. An import hash can be used to fingerprint binaries even after recompilation or other code-level transformations have occurred, which would change more traditional hash values.
   * This is a synonym for imphash.
   */
  import_hash?: string;
  /**
   * List of imported element names and types.
   */
  imports?: Record<string, unknown>;
  /**
   * Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_entropy?: number;
  /**
   * Variance for Shannon entropy calculation from the list of imported element names and types.
   */
  imports_names_var_entropy?: number;
  /**
   * Internal name of the file, provided at compile-time.
   */
  original_file_name?: string;
  /**
   * A hash of the PE header and data from one or more PE sections. An pehash can be used to cluster files by transforming structural information about a file into a hash value.
   * Learn more at https://www.usenix.org/legacy/events/leet09/tech/full_papers/wicherski/wicherski_html/index.html.
   */
  pehash?: string;
  /**
   * Internal product name of the file, provided at compile-time.
   */
  product?: string;
  /**
   * An array containing an object for each section of the PE file.
   * The keys that should be present in these objects are defined by sub-fields underneath `pe.sections.*`.
   */
  sections?: Record<string, unknown>;
}

interface Previous {
  /**
   * Array of process arguments, starting with the absolute path to the executable.
   * May be filtered to protect sensitive information.
   */
  args?: string;
  /**
   * Length of the process.args array.
   * This field can be useful for querying or performing bucket analysis on how many arguments were provided to start a process. More arguments may be an indication of suspicious activity.
   */
  args_count?: number;
  /**
   * Absolute path to the process executable.
   */
  executable?: string;
}

interface RealGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface RealUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SavedGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface SavedUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SessionLeader {
  /**
   * Array of process arguments, starting with the absolute path to the executable.
   * May be filtered to protect sensitive information.
   */
  args?: string;
  /**
   * Length of the process.args array.
   * This field can be useful for querying or performing bucket analysis on how many arguments were provided to start a process. More arguments may be an indication of suspicious activity.
   */
  args_count?: number;
  /**
   * Full command line that started the process, including the absolute path to the executable, and all arguments.
   * Some arguments may be filtered to protect sensitive information.
   */
  command_line?: string;
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Absolute path to the process executable.
   */
  executable?: string;
  group?: Group;
  /**
   * Whether the process is connected to an interactive shell.
   * Process interactivity is inferred from the processes file descriptors. If the character device for the controlling tty is the same as stdin and stderr for the process, the process is considered interactive.
   * Note: A non-interactive process can belong to an interactive session and is simply one that does not have open file descriptors reading the controlling TTY on FD 0 (stdin) or writing to the controlling TTY on FD 2 (stderr). A backgrounded process is still considered interactive if stdin and stderr are connected to the controlling TTY.
   */
  interactive?: boolean;
  /**
   * Process name.
   * Sometimes called program name or similar.
   */
  name?: string;
  parent?: Parent;
  /**
   * Process id.
   */
  pid?: number;
  real_group?: RealGroup;
  real_user?: RealUser;
  /**
   * This boolean is used to identify if a leader process is the same as the top level process.
   * For example, if `process.group_leader.same_as_process = true`, it means the process event in question is the leader of its process group. Details under `process.*` like `pid` would be the same under `process.group_leader.*` The same applies for both `process.session_leader` and `process.entry_leader`.
   * This field exists to the benefit of EQL and other rule engines since it's not possible to compare equality between two fields in a single document. e.g `process.entity_id` = `process.group_leader.entity_id` (top level process is the process group leader) OR `process.entity_id` = `process.entry_leader.entity_id` (top level process is the entry session leader)
   * Instead these rules could be written like: `process.group_leader.same_as_process: true` OR `process.entry_leader.same_as_process: true`
   * Note: This field is only set on `process.entry_leader`, `process.session_leader` and `process.group_leader`.
   */
  same_as_process?: boolean;
  saved_group?: SavedGroup;
  saved_user?: SavedUser;
  /**
   * The time the process started.
   */
  start?: string;
  supplemental_groups?: SupplementalGroups;
  /**
   * Information about the controlling TTY device. If set, the process belongs to an interactive session.
   */
  tty?: Record<string, unknown>;
  user?: User;
  /**
   * The working directory of the process.
   */
  working_directory?: string;
}

interface Group {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface Parent {
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Process id.
   */
  pid?: number;
  session_leader?: SessionLeader;
  /**
   * The time the process started.
   */
  start?: string;
}

interface SessionLeader {
  /**
   * Unique identifier for the process.
   * The implementation of this is specified by the data source, but some examples of what could be used here are a process-generated UUID, Sysmon Process GUIDs, or a hash of some uniquely identifying components of a process.
   * Constructing a globally unique identifier is a common practice to mitigate PID reuse as well as to identify a specific process over time, across multiple monitored hosts.
   */
  entity_id?: string;
  /**
   * Process id.
   */
  pid?: number;
  /**
   * The time the process started.
   */
  start?: string;
}

interface RealGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface RealUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SavedGroup {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface SavedUser {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SupplementalGroups {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface User {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}

interface SupplementalGroups {
  /**
   * Unique identifier for the group on the system/platform.
   */
  id?: string;
  /**
   * Name of the group.
   */
  name?: string;
}

interface Thread {
  /**
   * Thread ID.
   */
  id?: number;
  /**
   * Thread name.
   */
  name?: string;
}

interface User {
  /**
   * Unique identifier of the user.
   */
  id?: string;
  /**
   * Short name or login of the user.
   */
  name?: string;
}
