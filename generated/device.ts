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
 * Fields that describe a device instance and its characteristics.  Data collected for applications and processes running on a (mobile) device can be enriched with these fields to describe the identity, type and other characteristics of the device.
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
}
