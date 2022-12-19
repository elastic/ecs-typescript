/**
 * The `base` field set contains all fields which are at the root of the events. These fields are common across all types of events.
 */
export interface EcsBase {
  /**
   * Date/time when the event originated.
   * This is the date/time extracted from the event, typically representing when the event was generated by the source.
   * If the event source has no original timestamp, this value is typically populated by the first time the event was received by the pipeline.
   * Required field for all events.
   */
  '@timestamp': string;
  /**
   * Custom key/value pairs.
   * Can be used to add meta information to events. Should not contain nested objects. All values are stored as keyword.
   * Example: `docker` and `k8s` labels.
   */
  labels?: Record<string, unknown>;
  /**
   * For log events the message field contains the log message, optimized for viewing in a log viewer.
   * For structured logs without an original message field, other fields can be concatenated to form a human-readable summary of the event.
   * If multiple messages exist, they can be combined into one message.
   */
  message?: string;
  /**
   * List of keywords used to tag each event.
   */
  tags?: string;
}
