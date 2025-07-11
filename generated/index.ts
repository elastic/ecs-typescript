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

import { EcsAgent } from './agent';
import { EcsAs } from './as';
import { EcsBase } from './base';
import { EcsClient } from './client';
import { EcsCloud } from './cloud';
import { EcsCodeSignature } from './code_signature';
import { EcsContainer } from './container';
import { EcsDataStream } from './data_stream';
import { EcsDestination } from './destination';
import { EcsDevice } from './device';
import { EcsDll } from './dll';
import { EcsDns } from './dns';
import { EcsEcs } from './ecs';
import { EcsElf } from './elf';
import { EcsEmail } from './email';
import { EcsError } from './error';
import { EcsEvent } from './event';
import { EcsFaas } from './faas';
import { EcsFile } from './file';
import { EcsGenAi } from './gen_ai';
import { EcsGeo } from './geo';
import { EcsGroup } from './group';
import { EcsHash } from './hash';
import { EcsHost } from './host';
import { EcsHttp } from './http';
import { EcsInterface } from './interface';
import { EcsLog } from './log';
import { EcsMacho } from './macho';
import { EcsNetwork } from './network';
import { EcsObserver } from './observer';
import { EcsOrchestrator } from './orchestrator';
import { EcsOrganization } from './organization';
import { EcsOs } from './os';
import { EcsPackage } from './package';
import { EcsPe } from './pe';
import { EcsProcess } from './process';
import { EcsRegistry } from './registry';
import { EcsRelated } from './related';
import { EcsRisk } from './risk';
import { EcsRule } from './rule';
import { EcsServer } from './server';
import { EcsService } from './service';
import { EcsSource } from './source';
import { EcsThreat } from './threat';
import { EcsTls } from './tls';
import { EcsTracing } from './tracing';
import { EcsUrl } from './url';
import { EcsUser } from './user';
import { EcsUserAgent } from './user_agent';
import { EcsVlan } from './vlan';
import { EcsVolume } from './volume';
import { EcsVulnerability } from './vulnerability';
import { EcsX509 } from './x509';

export const EcsVersion = '9.1.0-dev' as const;

/**
 * Exporting raw schema files for easy programmatic use
 */
export { EcsFlat } from './ecs_flat';

export type {
  EcsAgent,
  EcsAs,
  EcsBase,
  EcsClient,
  EcsCloud,
  EcsCodeSignature,
  EcsContainer,
  EcsDataStream,
  EcsDestination,
  EcsDevice,
  EcsDll,
  EcsDns,
  EcsEcs,
  EcsElf,
  EcsEmail,
  EcsError,
  EcsEvent,
  EcsFaas,
  EcsFile,
  EcsGenAi,
  EcsGeo,
  EcsGroup,
  EcsHash,
  EcsHost,
  EcsHttp,
  EcsInterface,
  EcsLog,
  EcsMacho,
  EcsNetwork,
  EcsObserver,
  EcsOrchestrator,
  EcsOrganization,
  EcsOs,
  EcsPackage,
  EcsPe,
  EcsProcess,
  EcsRegistry,
  EcsRelated,
  EcsRisk,
  EcsRule,
  EcsServer,
  EcsService,
  EcsSource,
  EcsThreat,
  EcsTls,
  EcsTracing,
  EcsUrl,
  EcsUser,
  EcsUserAgent,
  EcsVlan,
  EcsVolume,
  EcsVulnerability,
  EcsX509,
};

export type Ecs = EcsBase &
  EcsTracing & {
    agent?: EcsAgent;
    client?: EcsClient;
    cloud?: EcsCloud;
    container?: EcsContainer;
    data_stream?: EcsDataStream;
    destination?: EcsDestination;
    device?: EcsDevice;
    dll?: EcsDll;
    dns?: EcsDns;
    ecs: EcsEcs;
    email?: EcsEmail;
    error?: EcsError;
    event?: EcsEvent;
    faas?: EcsFaas;
    file?: EcsFile;
    gen_ai?: EcsGenAi;
    group?: EcsGroup;
    host?: EcsHost;
    http?: EcsHttp;
    log?: EcsLog;
    network?: EcsNetwork;
    observer?: EcsObserver;
    orchestrator?: EcsOrchestrator;
    organization?: EcsOrganization;
    package?: EcsPackage;
    process?: EcsProcess;
    registry?: EcsRegistry;
    related?: EcsRelated;
    rule?: EcsRule;
    server?: EcsServer;
    service?: EcsService;
    source?: EcsSource;
    threat?: EcsThreat;
    tls?: EcsTls;
    url?: EcsUrl;
    user?: EcsUser;
    user_agent?: EcsUserAgent;
    volume?: EcsVolume;
    vulnerability?: EcsVulnerability;
  };
