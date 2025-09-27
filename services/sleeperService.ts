import { SleeperUser } from '../types';

const BASE_URL = 'https://api.sleeper.app/v1';

export const getUser = async (username: string): Promise<SleeperUser> => {
  const response = await fetch(`${BASE_URL}/user/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`User "${username}" not found. Please check the username and try again.`);
    }
    throw new Error('Failed to fetch user data from Sleeper API.');
  }

  const data: SleeperUser | null = await response.json();

  if (!data) {
     throw new Error(`User "${username}" not found. The API returned no data.`);
  }

  return data;
};
