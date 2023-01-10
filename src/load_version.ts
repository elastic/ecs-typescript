import axios from 'axios';

/**
 * Fetch version string from the version file for given github ref
 */
export async function loadVersion(ref: string) {
  const url = `https://raw.githubusercontent.com/elastic/ecs/${ref}/version`;

  const response = await axios.get<string>(url);

  if (response.status !== 200) {
    throw new Error(`Could not fetch version string from ${url}`);
  }

  try {
    return response.data.trim();
  } catch (e) {
    console.error(`Failed to load version string from ${url}`);
    console.error(e);
    process.exit(1);
  }
}
