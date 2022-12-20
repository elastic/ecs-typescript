
export interface EcsHttp {
  request?: Request;
  response?: Response;
  version?: string;
}


interface Request {
  body?: Body;
  bytes?: number;
  id?: string;
  method?: string;
  mime_type?: string;
  referrer?: string;
}


interface Body {
  bytes?: number;
  content?: string;
}


interface Response {
  body?: Body;
  bytes?: number;
  mime_type?: string;
  status_code?: number;
}


interface Body {
  bytes?: number;
  content?: string;
}

