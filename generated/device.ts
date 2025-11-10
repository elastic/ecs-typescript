/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Fields that describe a device instance and its characteristics. Data collected for applications and processes running on a (mobile) device can be enriched with these fields to describe the identity, type and other characteristics of the device.
 * This field group definition is based on the Device namespace of the OpenTelemetry Semantic Conventions (https://opentelemetry.io/docs/reference/specification/resource/semantic_conventions/device/).
 */
export interface EcsDevice {
  /**
   * The unique identifier of a device. The identifier must not change across application sessions but stay fixed for an instance of a (mobile) device.
   * On iOS, this value must be equal to the vendor identifier (https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android, this value must be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application.
   * For GDPR and data protection law reasons this identifier should not carry information that would allow to identify a user.
   */
  id?: string;
  /**
   * The vendor name of the device manufacturer.
   */
  manufacturer?: string;
  model?: {
    /**
     * The machine readable identifier of the device model.
     */
    identifier?: string;
    /**
     * The human readable marketing name of the device model.
     */
    name?: string;
  };

  product?: {
    /**
     * A unique identifier assigned by the vendor to distinguish different product models. This is typically a hexadecimal value that, combined with the vendor ID, creates a globally unique device identifier.
     * The product ID is assigned by the device manufacturer and should remain consistent across all instances of the same product model. For hardware devices, this often corresponds to the Product ID (PID) in device descriptors.
     * See https://learn.microsoft.com/en-us/windows-hardware/drivers/install/standard-usb-identifiers for more details on product identification standards.
     */
    id?: string;
    /**
     * The human-readable marketing or commercial name of the device as designated by the manufacturer. This name is typically found in product documentation, marketing materials, or device packaging.
     * Unlike the product.id which is a technical identifier, this field contains the consumer-facing product name that would be recognizable to end users. The name should be exactly as provided by the manufacturer and may include model numbers, series designations, or other identifying information.
     */
    name?: string;
  };

  /**
   * The unique serial number serves as a distinct identifier for each device, aiding in inventory management and device authentication.
   */
  serial_number?: string;
  /**
   * A classification of the device based on its primary function or device class. This field categorizes devices into functional groups to enable policy enforcement and monitoring based on device capabilities.
   * The classification should follow standard device class definitions where possible, such as "Storage Device", "Human Interface Device", "Audio", "Video", "Network", "Communication", etc. This allows for consistent categorization across different device types and manufacturers.
   * See https://www.usb.org/defined-class-codes for standard device class definitions.
   */
  type?: string;
  vendor?: {
    /**
     * A unique identifier assigned to device manufacturers by standards organizations. This is typically a hexadecimal value that uniquely identifies the vendor/manufacturer of the device.
     * The vendor ID is assigned by standards bodies and remains consistent across all products from the same manufacturer. For hardware devices, this often corresponds to the Vendor ID (VID) in device descriptors. This identifier enables tracking and policy enforcement at the manufacturer level.
     * See https://learn.microsoft.com/en-us/windows-hardware/drivers/install/standard-usb-identifiers for more information on vendor identification standards.
     */
    id?: string;
    /**
     * The name of the organization or company that manufactured or produced the device. This should be the official registered business name or commonly recognized brand name of the manufacturer.
     * The vendor name provides human-readable identification of the device manufacturer and should be consistent with the vendor.id field. This field is useful for reporting, device inventory management, and applying vendor-specific policies or security rules.
     */
    name?: string;
  };
}
