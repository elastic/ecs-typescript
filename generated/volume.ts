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
 * Fields related to storage volume details.
 */
export interface EcsVolume {
  /**
   * Bus type of the device, such as `Nvme`, `Usb`, or `FileBackedVirtual`.
   */
  bus_type?: string;
  /**
   * Describes the default access(es) of the volume.
   */
  default_access?: string;
  /**
   * Full path of the volume device.
   * Only populate this field for POSIX system volumes.
   */
  device_name?: string;
  /**
   * Volume device type.
   * The most frequently seen volume device types are `Disk File System` and `CD-ROM File System`.
   */
  device_type?: string;
  /**
   * The MS-DOS name of a device.
   * DOS device name is in the format of driver letters, such as `C:`. The field is relevant to Windows systems only.
   */
  dos_name?: string;
  /**
   * Volume device file system type.
   * The most common volume file system types are `NTFS` and `UDF`.
   */
  file_system_type?: string;
  /**
   * Mount name of the volume device.
   * Only populate this field for POSIX system volumes.
   */
  mount_name?: string;
  /**
   * The NT device name.
   * NT device name uses a format of `\Device\HarddiskVolume2`. The field is relevant to Windows systems only.
   */
  nt_name?: string;
  /**
   * ProductID of the device.
   * The vendor provides the ProductID for the volume, if any.
   */
  product_id?: string;
  /**
   * Product name of the volume.
   * The volume device vendor provides this value.
   */
  product_name?: string;
  /**
   * Indicates if the volume is removable.
   */
  removable?: boolean;
  /**
   * Serial number identifier for the volume device.
   * The serial number is provided by the vendor of the device, if any.
   */
  serial_number?: string;
  /**
   * Size of the volume device in bytes.
   */
  size?: number;
  /**
   * VendorID of the volume device.
   * The volume device vendor provides this value.
   */
  vendor_id?: string;
  /**
   * Vendor name of the volume device.
   * The value is provided by the vendor of the device.
   */
  vendor_name?: string;
  /**
   * Indicates if the volume is writable.
   */
  writable?: boolean;
}
