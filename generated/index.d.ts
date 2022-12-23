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
import { EcsVulnerability } from './vulnerability';
import { EcsX509 } from './x509';

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
  EcsVulnerability,
  EcsX509,
};

export type Ecs = EcsBase &
  EcsTracing & {
    agent?: EcsAgent;
    base?: EcsBase;
    client?: EcsClient;
    cloud?: EcsCloud;
    container?: EcsContainer;
    data_stream?: EcsDataStream;
    destination?: EcsDestination;
    device?: EcsDevice;
    dll?: EcsDll;
    dns?: EcsDns;
    ecs?: EcsEcs;
    email?: EcsEmail;
    error?: EcsError;
    event?: EcsEvent;
    faas?: EcsFaas;
    file?: EcsFile;
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
    tracing?: EcsTracing;
    url?: EcsUrl;
    user?: EcsUser;
    user_agent?: EcsUserAgent;
    vulnerability?: EcsVulnerability;
  };
