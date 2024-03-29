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
 * Details about the event's logging mechanism or logging transport.
 * The log.* fields are typically populated with details about the logging mechanism used to create and/or transport the event. For example, syslog details belong under `log.syslog.*`.
 * The details specific to your event source are typically not logged under `log.*`, but rather in `event.*` or in other ECS fields.
 */
export interface EcsLog {
  file?: {
    /**
     * Full path to the log file this event came from, including the file name. It should include the drive letter, when appropriate.
     * If the event wasn't read from a log file, do not populate this field.
     */
    path?: string;
  };

  /**
   * Original log level of the log event.
   * If the source of the event provides a log level or textual severity, this is the one that goes in `log.level`. If your source doesn't specify one, you may put your event transport's severity here (e.g. Syslog severity).
   * Some examples are `warn`, `err`, `i`, `informational`.
   */
  level?: string;
  /**
   * The name of the logger inside an application. This is usually the name of the class which initialized the logger, or can be a custom name.
   */
  logger?: string;
  origin?: {
    file?: {
      /**
       * The line number of the file containing the source code which originated the log event.
       */
      line?: number;
      /**
       * The name of the file containing the source code which originated the log event.
       * Note that this field is not meant to capture the log file. The correct field to capture the log file is `log.file.path`.
       */
      name?: string;
    };

    /**
     * The name of the function or method which originated the log event.
     */
    function?: string;
  };

  /**
   * The Syslog metadata of the event, if the event was transmitted via Syslog. Please see RFCs 5424 or 3164.
   */
  syslog?: Record<string, unknown>;
}
