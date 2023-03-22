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
 * These fields can represent errors of any kind.
 * Use them for errors that happen while fetching events or in cases where the event itself contains an error.
 */
export interface EcsError {
  /**
   * Error code describing the error.
   */
  code?: string;
  /**
   * Unique identifier for the error.
   */
  id?: string;
  /**
   * Error message.
   */
  message?: string;
  /**
   * The stack trace of this error in plain text.
   */
  stack_trace?: string;
  /**
   * The type of the error, for example the class name of the exception.
   */
  type?: string;
}
