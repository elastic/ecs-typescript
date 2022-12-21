export interface EcsBase {
  '@timestamp': string;
  labels?: Record<string, unknown>;
  message?: string;
  tags?: string;
}
