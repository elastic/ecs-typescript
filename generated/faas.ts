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
 * The user fields describe information about the function as a service (FaaS) that is relevant to the event.
 */
export interface EcsFaas {
  /**
   * Boolean value indicating a cold start of a function.
   */
  coldstart?: boolean;
  /**
   * The execution ID of the current function execution.
   */
  execution?: string;
  /**
   * The unique identifier of a serverless function.
   * For AWS Lambda it's the function ARN (Amazon Resource Name) without a version or alias suffix.
   */
  id?: string;
  /**
   * The name of a serverless function.
   */
  name?: string;
  trigger?: {
    /**
     * The ID of the trigger request , message, event, etc.
     */
    request_id?: string;
    /**
     * The trigger for the function execution.
     */
    type?: string;
  };

  /**
   * The version of a serverless function.
   */
  version?: string;
}
