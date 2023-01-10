/**
 * Meta-information specific to ECS.
 */
export interface EcsEcs {
  /**
   * ECS version this event conforms to. `ecs.version` is a required field and must exist in all events.
   * When querying across multiple indices -- which may conform to slightly different ECS versions -- this field lets integrations adjust to the schema version of the events.
   */
  version: '8.7.0-dev';
}
