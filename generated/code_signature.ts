export interface EcsCodeSignature {
  digest_algorithm?: string;
  exists?: boolean;
  signing_id?: string;
  status?: string;
  subject_name?: string;
  team_id?: string;
  timestamp?: string;
  trusted?: boolean;
  valid?: boolean;
}
