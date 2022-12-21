/**
 * The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.
 * Examples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken.
 */
export interface EcsAgent {
  build?: Build;
  /**
   * Ephemeral identifier of this agent (if one exists).
   * This id normally changes across restarts, but `agent.id` does not.
   */
  ephemeral_id?: string;
  /**
   * Unique identifier of this agent (if one exists).
   * Example: For Beats this would be beat.id.
   */
  id?: string;
  /**
   * Custom name of the agent.
   * This is a name that can be given to an agent. This can be helpful if for example two Filebeat instances are running on the same host but a human readable separation is needed on which Filebeat instance data is coming from.
   */
  name?: string;
  /**
   * Type of the agent.
   * The agent type always stays the same and should be given by the agent used. In case of Filebeat the agent would always be Filebeat also if two Filebeat instances are run on the same machine.
   */
  type?: string;
  /**
   * Version of the agent.
   */
  version?: string;
}

interface Build {
  /**
   * Extended build information for the agent.
   * This field is intended to contain any build information that a data source may provide, no specific formatting is required.
   */
  original?: string;
}
