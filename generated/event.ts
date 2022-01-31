
export interface EcsEvent {
  action?: string;
  agent_id_status?: string;
  category?: string;
  code?: string;
  created?: string;
  dataset?: string;
  duration?: number;
  end?: string;
  hash?: string;
  id?: string;
  ingested?: string;
  kind?: string;
  module?: string;
  original?: string;
  outcome?: string;
  provider?: string;
  reason?: string;
  reference?: string;
  risk_score?: number;
  risk_score_norm?: number;
  sequence?: number;
  severity?: number;
  start?: string;
  timezone?: string;
  type?: string;
  url?: string;
}

