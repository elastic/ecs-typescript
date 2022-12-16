export interface EcsEmail {
  attachments?: Record<string, unknown>;
  bcc?: Bcc;
  cc?: Cc;
  content_type?: string;
  delivery_timestamp?: string;
  direction?: string;
  from?: From;
  local_id?: string;
  message_id?: string;
  origination_timestamp?: string;
  reply_to?: ReplyTo;
  sender?: Sender;
  subject?: string;
  to?: To;
  x_mailer?: string;
}

interface Bcc {
  address?: string;
}

interface Cc {
  address?: string;
}

interface From {
  address?: string;
}

interface ReplyTo {
  address?: string;
}

interface Sender {
  address?: string;
}

interface To {
  address?: string;
}
