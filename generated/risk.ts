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
 * Fields for describing risk score and risk level of entities such as hosts and users. These fields are not allowed to be nested under `event.*`. Please continue to use `event.risk_score` and `event.risk_score_norm` for event risk.
 */
export interface EcsRisk {
  /**
   * A risk classification level calculated by an internal system as part of entity analytics and entity risk scoring.
   */
  calculated_level?: string;
  /**
   * A risk classification score calculated by an internal system as part of entity analytics and entity risk scoring.
   */
  calculated_score?: number;
  /**
   * A risk classification score calculated by an internal system as part of entity analytics and entity risk scoring, and normalized to a range of 0 to 100.
   */
  calculated_score_norm?: number;
  /**
   * A risk classification level obtained from outside the system, such as from some external Threat Intelligence Platform.
   */
  static_level?: string;
  /**
   * A risk classification score obtained from outside the system, such as from some external Threat Intelligence Platform.
   */
  static_score?: number;
  /**
   * A risk classification score obtained from outside the system, such as from some external Threat Intelligence Platform, and normalized to a range of 0 to 100.
   */
  static_score_norm?: number;
}
