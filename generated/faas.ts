
export interface EcsFaas {
  coldstart?: boolean;
  execution?: string;
  trigger?: Record<string, unknown>;
}

