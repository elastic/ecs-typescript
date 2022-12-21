/**
 * Fields that describe a device instance and its characteristics.  Data collected for applications and processes running on a (mobile) device can be enriched with these fields to describe the identity, type and other characteristics of the device.
 * This field group definition is based on the Device namespace of the OpenTelemetry Semantic Conventions (https://opentelemetry.io/docs/reference/specification/resource/semantic_conventions/device/).
 */
export interface EcsDevice {
  /**
   * The unique identifier of a device. The identifier must not change across application sessions but stay fixex for an instance of a (mobile) device.
   * On iOS, this value must be equal to the vendor identifier (https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android, this value must be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application.
   * For GDPR and data protection law reasons this identifier should not carry information that would allow to identify a user.
   */
  id?: string;
  /**
   * The vendor name of the device manufacturer.
   */
  manufacturer?: string;
  model?: Model;
}

interface Model {
  /**
   * The machine readable identifier of the device model.
   */
  identifier?: string;
  /**
   * The human readable marketing name of the device model.
   */
  name?: string;
}
