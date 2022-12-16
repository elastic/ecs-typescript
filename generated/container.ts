export interface EcsContainer {
  cpu?: Cpu;
  disk?: Disk;
  id?: string;
  image?: Image;
  labels?: Record<string, unknown>;
  memory?: Memory;
  name?: string;
  network?: Network;
  runtime?: string;
}

interface Cpu {
  usage?: number;
}

interface Disk {
  read?: Read;
  write?: Write;
}

interface Read {
  bytes?: number;
}

interface Write {
  bytes?: number;
}

interface Image {
  hash?: Hash;
  name?: string;
  tag?: string;
}

interface Hash {
  all?: string;
}

interface Memory {
  usage?: number;
}

interface Network {
  egress?: Egress;
  ingress?: Ingress;
}

interface Egress {
  bytes?: number;
}

interface Ingress {
  bytes?: number;
}
