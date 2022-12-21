export interface EcsFaas {
  coldstart?: boolean;
  execution?: string;
  id?: string;
  name?: string;
  trigger?: Record<string, unknown>;
  version?: string;
}
