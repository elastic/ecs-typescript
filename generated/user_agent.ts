export interface EcsUserAgent {
  device?: Device;
  name?: string;
  original?: string;
  os?: Os;
  version?: string;
}

interface Device {
  name?: string;
}

interface Os {
  family?: string;
  full?: string;
  kernel?: string;
  name?: string;
  platform?: string;
  type?: string;
  version?: string;
}
