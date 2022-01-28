export const agentPseudoSpec = {
  agent: {
    description: "The agent fields contain the data about the software entity, if any, that collects, detects, or observes events on a host, or takes measurements on a host.\nExamples include Beats. Agents may also run on observers. ECS agent.* fields shall be populated with details of the agent running on the host or observer where the event happened or the measurement was taken.",
    build:{
      original: {
        __type: {
          dashed_name: "agent-build-original",
          description: "Extended build information for the agent.\nThis field is intended to contain any build information that a data source may provide, no specific formatting is required.",
          example: "metricbeat version 7.6.0 (amd64), libbeat 7.6.0 [6a23e8f8f30f5001ba344e4e54d8d9cb82cb107c built 2020-02-05 23:10:10 +0000 UTC]",
          flat_name: "agent.build.original",
          ignore_above: 1024,
          level: "core",
          name: "build.original",
          normalize: [],
          short: "Extended build information for the agent.",
          type: "keyword"
        }
      }
    },
    ephemeral_id: {
      __type: {
        dashed_name: "agent-ephemeral-id",
        description: "Ephemeral identifier of this agent (if one exists).\nThis id normally changes across restarts, but `agent.id` does not.",
        example: "8a4f500f",
        flat_name: "agent.ephemeral_id",
        ignore_above: 1024,
        level: "extended",
        name: "ephemeral_id",
        normalize: [],
        short: "Ephemeral identifier of this agent.",
        type: "keyword"
      }
    },
    id: {
      __type: {
        dashed_name: "agent-id",
        description: "Unique identifier of this agent (if one exists).\nExample: For Beats this would be beat.id.",
        example: "8a4f500d",
        flat_name: "agent.id",
        ignore_above: 1024,
        level: "core",
        name: "id",
        normalize: [],
        short: "Unique identifier of this agent.",
        type: "keyword"
      }
    },
    name: {
      __type: {
        dashed_name: "agent-name",
        description: "Custom name of the agent.\nThis is a name that can be given to an agent. This can be helpful if for example two Filebeat instances are running on the same host but a human readable separation is needed on which Filebeat instance data is coming from.\nIf no name is given, the name is often left empty.",
        example: "foo",
        flat_name: "agent.name",
        ignore_above: 1024,
        level: "core",
        name: "name",
        normalize: [],
        short: "Custom name of the agent.",
        type: "keyword"
      }
    },
    type: {
      __type: {
        dashed_name: "agent-type",
        description: "Type of the agent.\nThe agent type always stays the same and should be given by the agent used. In case of Filebeat the agent would always be Filebeat also if two Filebeat instances are run on the same machine.",
        example: "filebeat",
        flat_name: "agent.type",
        ignore_above: 1024,
        level: "core",
        name: "type",
        normalize: [],
        short: "Type of the agent.",
        type: "keyword"
      }
    },
    version: {
      __type: {
          dashed_name: "agent-version",
          description: "Version of the agent.",
          example: "6.0.0-rc2",
          flat_name: "agent.version",
          ignore_above: 1024,
          level: "core",
          name: "version",
          normalize: [],
          short: "Version of the agent.",
          type: "keyword"
        }
    },
    footnote: "Examples: In the case of Beats for logs, the agent.name is filebeat. For APM, it is the agent running in the app/service. The agent information does not change if data is sent through queuing systems like Kafka, Redis, or processing systems such as Logstash or APM Server.",
    group: 2,
    // @ts-ignore multiple properties with the same name
    name: "agent",
    prefix: "agent.",
    short: "Fields about the monitoring agent.",
    title: "Agent",
    // @ts-ignore multiple properties with the same name
    type: "group"
  }
};

