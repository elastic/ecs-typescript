export interface EcsLog {
  file?: File;
  level?: string;
  logger?: string;
  origin?: Origin;
  syslog?: Record<string, unknown>;
}

interface File {
  path?: string;
}

interface Origin {
  file?: File;
  function?: string;
}

interface File {
  line?: number;
  name?: string;
}
