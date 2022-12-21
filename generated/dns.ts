export interface EcsDns {
  answers?: Record<string, unknown>;
  header_flags?: string;
  id?: string;
  op_code?: string;
  question?: Question;
  resolved_ip?: string;
  response_code?: string;
  type?: string;
}

interface Question {
  class?: string;
  name?: string;
  registered_domain?: string;
  subdomain?: string;
  top_level_domain?: string;
  type?: string;
}
