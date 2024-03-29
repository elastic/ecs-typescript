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
 * Geo fields can carry data about a specific location related to an event.
 * This geolocation information can be derived from techniques such as Geo IP, or be user-supplied.
 */
export interface EcsGeo {
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
}
