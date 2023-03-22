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
 * Event details relating to an email transaction.
 * This field set focuses on the email message header, body, and attachments. Network protocols that send and receive email messages such as SMTP are outside the scope of the `email.*` fields.
 */
export interface EcsEmail {
  /**
   * A list of objects describing the attachment files sent along with an email message.
   */
  attachments?: Record<string, unknown> | Array<Record<string, unknown>>;
  bcc?: {
    /**
     * The email address of BCC recipient
     */
    address?: string | Array<string>;
  };

  cc?: {
    /**
     * The email address of CC recipient
     */
    address?: string | Array<string>;
  };

  /**
   * Information about how the message is to be displayed.
   * Typically a MIME type.
   */
  content_type?: string;
  /**
   * The date and time when the email message was received by the service or client.
   */
  delivery_timestamp?: string;
  /**
   * The direction of the message based on the sending and receiving domains.
   */
  direction?: string;
  from?: {
    /**
     * The email address of the sender, typically from the RFC 5322 `From:` header field.
     */
    address?: string | Array<string>;
  };

  /**
   * Unique identifier given to the email by the source that created the event.
   * Identifier is not persistent across hops.
   */
  local_id?: string;
  /**
   * Identifier from the RFC 5322 `Message-ID:` email header that refers to a particular email message.
   */
  message_id?: string;
  /**
   * The date and time the email message was composed. Many email clients will fill in this value automatically when the message is sent by a user.
   */
  origination_timestamp?: string;
  reply_to?: {
    /**
     * The address that replies should be delivered to based on the value in the RFC 5322 `Reply-To:` header.
     */
    address?: string | Array<string>;
  };

  sender?: {
    /**
     * Per RFC 5322, specifies the address responsible for the actual transmission of the message.
     */
    address?: string;
  };

  /**
   * A brief summary of the topic of the message.
   */
  subject?: string;
  to?: {
    /**
     * The email address of recipient
     */
    address?: string | Array<string>;
  };

  /**
   * The name of the application that was used to draft and send the original email message.
   */
  x_mailer?: string;
}
