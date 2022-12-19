/**
 * Distributed tracing makes it possible to analyze performance throughout a microservice architecture all in one view. This is accomplished by tracing all of the requests - from the initial web request in the front-end service - to queries made through multiple back-end services.
 * Unlike most field sets in ECS, the tracing fields are *not* nested under the field set name. In other words, the correct field name is `trace.id`, not `tracing.trace.id`, and so on.
 */
export interface EcsTracing {}
