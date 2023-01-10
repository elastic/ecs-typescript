/**
 * Fields related to HTTP activity. Use the `url` field set to store the url of the request.
 */
export interface EcsHttp {
  request: {
    body: {
      /**
       * Size in bytes of the request body.
       */
      bytes?: number;
      /**
       * The full HTTP request body.
       */
      content?: string;
    };

    /**
     * Total size in bytes of the request (body and headers).
     */
    bytes?: number;
    /**
     * A unique identifier for each HTTP request to correlate logs between clients and servers in transactions.
     * The id may be contained in a non-standard HTTP header, such as `X-Request-ID` or `X-Correlation-ID`.
     */
    id?: string;
    /**
     * HTTP request method.
     * The value should retain its casing from the original event. For example, `GET`, `get`, and `GeT` are all considered valid values for this field.
     */
    method?: string;
    /**
     * Mime type of the body of the request.
     * This value must only be populated based on the content of the request body, not on the `Content-Type` header. Comparing the mime type of a request with the request's Content-Type header can be helpful in detecting threats or misconfigured clients.
     */
    mime_type?: string;
    /**
     * Referrer for this HTTP request.
     */
    referrer?: string;
  };

  response: {
    body: {
      /**
       * Size in bytes of the response body.
       */
      bytes?: number;
      /**
       * The full HTTP response body.
       */
      content?: string;
    };

    /**
     * Total size in bytes of the response (body and headers).
     */
    bytes?: number;
    /**
     * Mime type of the body of the response.
     * This value must only be populated based on the content of the response body, not on the `Content-Type` header. Comparing the mime type of a response with the response's Content-Type header can be helpful in detecting misconfigured servers.
     */
    mime_type?: string;
    /**
     * HTTP response status code.
     */
    status_code?: number;
  };

  /**
   * HTTP version.
   */
  version?: string;
}
