/**
 * Container fields are used for meta information about the specific container that is the source of information.
 * These fields help correlate data based containers from any runtime.
 */
export interface EcsContainer {
  cpu?: Cpu;
  disk?: Disk;
  /**
   * Unique container id.
   */
  id?: string;
  image?: Image;
  /**
   * Image labels.
   */
  labels?: Record<string, unknown>;
  memory?: Memory;
  /**
   * Container name.
   */
  name?: string;
  network?: Network;
  /**
   * Runtime managing this container.
   */
  runtime?: string;
}

interface Cpu {
  /**
   * Percent CPU used which is normalized by the number of CPU cores and it ranges from 0 to 1. Scaling factor: 1000.
   */
  usage?: number;
}

interface Disk {
  read?: Read;
  write?: Write;
}

interface Read {
  /**
   * The total number of bytes (gauge) read successfully (aggregated from all disks) since the last metric collection.
   */
  bytes?: number;
}

interface Write {
  /**
   * The total number of bytes (gauge) written successfully (aggregated from all disks) since the last metric collection.
   */
  bytes?: number;
}

interface Image {
  hash?: Hash;
  /**
   * Name of the image the container was built on.
   */
  name?: string;
  /**
   * Container image tags.
   */
  tag?: string;
}

interface Hash {
  /**
   * An array of digests of the image the container was built on. Each digest consists of the hash algorithm and value in this format: `algorithm:value`. Algorithm names should align with the field names in the ECS hash field set.
   */
  all?: string;
}

interface Memory {
  /**
   * Memory usage percentage and it ranges from 0 to 1. Scaling factor: 1000.
   */
  usage?: number;
}

interface Network {
  egress?: Egress;
  ingress?: Ingress;
}

interface Egress {
  /**
   * The number of bytes (gauge) sent out on all network interfaces by the container since the last metric collection.
   */
  bytes?: number;
}

interface Ingress {
  /**
   * The number of bytes received (gauge) on all network interfaces by the container since the last metric collection.
   */
  bytes?: number;
}
