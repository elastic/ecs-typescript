/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * A Server is defined as the responder in a network connection for events regarding sessions, connections, or bidirectional flow records.
 * For TCP events, the server is the receiver of the initial SYN packet(s) of the TCP connection. For other protocols, the server is generally the responder in the network transaction. Some systems actually use the term "responder" to refer the server in TCP connections. The server fields describe details about the system acting as the server in the network event. Server fields are usually populated in conjunction with client fields. Server fields are generally not populated for packet-level events.
 * Client / server representations can add semantic context to an exchange, which is helpful to visualize the data in certain situations. If your context falls in that category, you should still ensure that source and destination are filled appropriately.
 */
export interface EcsServer {
  /**
   * Some event server addresses are defined ambiguously. The event will sometimes list an IP, a domain or a unix socket.  You should always store the raw address in the `.address` field.
   * Then it should be duplicated to `.ip` or `.domain`, depending on which one it is.
   */
  address?: string;
  as: {
    /**
     * Unique number allocated to the autonomous system. The autonomous system number (ASN) uniquely identifies each network on the Internet.
     */
    number?: number;
    organization: {
      /**
       * Organization name.
       */
      name?: string;
    };
  };

  /**
   * Bytes sent from the server to the client.
   */
  bytes?: number;
  /**
   * The domain name of the server system.
   * This value may be a host name, a fully qualified domain name, or another host naming format. The value may derive from the original event or be added from enrichment.
   */
  domain?: string;
  geo: {
    /**
     * City name.
     */
    city_name?: string;
    /**
     * Two-letter code representing continent's name.
     */
    continent_code?: string;
    /**
     * Name of the continent.
     */
    continent_name?: string;
    /**
     * Country ISO code.
     */
    country_iso_code?: string;
    /**
     * Country name.
     */
    country_name?: string;
    /**
     * Longitude and latitude.
     */
    location?: { lat: number; lon: number };
    /**
     * User-defined description of a location, at the level of granularity they care about.
     * Could be the name of their data centers, the floor number, if this describes a local physical entity, city names.
     * Not typically used in automated geolocation.
     */
    name?: string;
    /**
     * Postal code associated with the location.
     * Values appropriate for this field may also be known as a postcode or ZIP code and will vary widely from country to country.
     */
    postal_code?: string;
    /**
     * Region ISO code.
     */
    region_iso_code?: string;
    /**
     * Region name.
     */
    region_name?: string;
    /**
     * The time zone of the location, such as IANA time zone name.
     */
    timezone?: string;
  };

  /**
   * IP address of the server (IPv4 or IPv6).
   */
  ip?: string;
  /**
   * MAC address of the server.
   * The notation format from RFC 7042 is suggested: Each octet (that is, 8-bit byte) is represented by two [uppercase] hexadecimal digits giving the value of the octet as an unsigned integer. Successive octets are separated by a hyphen.
   */
  mac?: string;
  nat: {
    /**
     * Translated ip of destination based NAT sessions (e.g. internet to private DMZ)
     * Typically used with load balancers, firewalls, or routers.
     */
    ip?: string;
    /**
     * Translated port of destination based NAT sessions (e.g. internet to private DMZ)
     * Typically used with load balancers, firewalls, or routers.
     */
    port?: number;
  };

  /**
   * Packets sent from the server to the client.
   */
  packets?: number;
  /**
   * Port of the server.
   */
  port?: number;
  /**
   * The highest registered server domain, stripped of the subdomain.
   * For example, the registered domain for "foo.example.com" is "example.com".
   * This value can be determined precisely with a list like the public suffix list (http://publicsuffix.org). Trying to approximate this by simply taking the last two labels will not work well for TLDs such as "co.uk".
   */
  registered_domain?: string;
  /**
   * The subdomain portion of a fully qualified domain name includes all of the names except the host name under the registered_domain.  In a partially qualified domain, or if the the qualification level of the full name cannot be determined, subdomain contains all of the names below the registered domain.
   * For example the subdomain portion of "www.east.mydomain.co.uk" is "east". If the domain has multiple levels of subdomain, such as "sub2.sub1.example.com", the subdomain field should contain "sub2.sub1", with no trailing period.
   */
  subdomain?: string;
  /**
   * The effective top level domain (eTLD), also known as the domain suffix, is the last part of the domain name. For example, the top level domain for example.com is "com".
   * This value can be determined precisely with a list like the public suffix list (http://publicsuffix.org). Trying to approximate this by simply taking the last label will not work well for effective TLDs such as "co.uk".
   */
  top_level_domain?: string;
  user: {
    /**
     * Name of the directory the user is a member of.
     * For example, an LDAP or Active Directory domain name.
     */
    domain?: string;
    /**
     * User email address.
     */
    email?: string;
    /**
     * User's full name, if available.
     */
    full_name?: string;
    group: {
      /**
       * Name of the directory the group is a member of.
       * For example, an LDAP or Active Directory domain name.
       */
      domain?: string;
      /**
       * Unique identifier for the group on the system/platform.
       */
      id?: string;
      /**
       * Name of the group.
       */
      name?: string;
    };

    /**
     * Unique user hash to correlate information for a user in anonymized form.
     * Useful if `user.id` or `user.name` contain confidential information and cannot be used.
     */
    hash?: string;
    /**
     * Unique identifier of the user.
     */
    id?: string;
    /**
     * Short name or login of the user.
     */
    name?: string;
    /**
     * Array of user roles at the time of the event.
     */
    roles?: string;
  };
}
