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
 * Fields that capture the context of Generative Artificial Intelligence (GenAI) Models requests and responses
 * This field group definition is based on the Gen AI namespace of the OpenTelemetry Semantic Conventions (https://opentelemetry.io/docs/specs/semconv/attributes-registry/gen-ai/).
 */
export interface EcsGenAi {
  agent?: {
    /**
     * Free-form description of the GenAI agent provided by the application.
     */
    description?: string;
    /**
     * The unique identifier of the GenAI agent.
     */
    id?: string;
    /**
     * Human-readable name of the GenAI agent provided by the application.
     */
    name?: string;
  };

  operation?: {
    /**
     * The name of the operation being performed.
     */
    name?: string;
  };

  output?: {
    /**
     * Represents the content type requested by the client.
     */
    type?: string;
  };

  request?: {
    choice?: {
      /**
       * The target number of candidate completions to return.
       */
      count?: number;
    };

    /**
     * The encoding formats requested in an embeddings operation, if specified.
     */
    encoding_formats?: Record<string, unknown>;
    /**
     * The frequency penalty setting for the GenAI request.
     */
    frequency_penalty?: number;
    /**
     * The maximum number of tokens the model generates for a request.
     */
    max_tokens?: number;
    /**
     * The name of the GenAI model a request is being made to.
     */
    model?: string;
    /**
     * The presence penalty setting for the GenAI request.
     */
    presence_penalty?: number;
    /**
     * Requests with same seed value more likely to return same result.
     */
    seed?: number;
    /**
     * List of sequences that the model will use to stop generating further tokens.
     */
    stop_sequences?: Record<string, unknown>;
    /**
     * The temperature setting for the GenAI request.
     */
    temperature?: number;
    /**
     * The top_k sampling setting for the GenAI request.
     */
    top_k?: number;
    /**
     * The top_p sampling setting for the GenAI request.
     */
    top_p?: number;
  };

  response?: {
    /**
     * Array of reasons the model stopped generating tokens, corresponding to each generation received.
     */
    finish_reasons?: Record<string, unknown>;
    /**
     * The unique identifier for the completion.
     */
    id?: string;
    /**
     * The name of the model that generated the response.
     */
    model?: string;
  };

  /**
   * The Generative AI product as identified by the client or server instrumentation.
   */
  system?: string;
  token?: {
    /**
     * The type of token being counted.
     */
    type?: string;
  };

  tool?: {
    call?: {
      /**
       * The tool call identifier.
       */
      id?: string;
    };

    /**
     * Name of the tool utilized by the agent.
     */
    name?: string;
    /**
     * Type of the tool utilized by the agent
     */
    type?: string;
  };

  usage?: {
    /**
     * The number of tokens used in the GenAI input (prompt).
     */
    input_tokens?: number;
    /**
     * The number of tokens used in the GenAI response (completion).
     */
    output_tokens?: number;
  };
}
