import { load } from 'js-yaml';

import axios from 'axios';

export async function loadYaml(ref: string) {
  const url = `https://raw.githubusercontent.com/elastic/ecs/${ref}/generated/ecs/ecs_nested.yml`;

  const response = await axios.get<string>(url);

  if (response.status !== 200) {
    throw new Error(`Could not fetch ecs spec from ${url}`);
  }

  try {
    const doc = load(response.data);
    return doc as Record<string, unknown>;
  } catch (e) {
    console.error(`Failed to load spec from ${url}`);
    console.error(e);
    process.exit(1);
  }
}
