// ECS types

// The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.
// Examples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken.
export interface Test {
  name?: string;
}
