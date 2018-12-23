import axios from 'axios';

import { authUrl } from './config';

export const auth = async (email: string): Promise<string> => {
  const { data } = await axios.post(authUrl, { email });

  return data.token;
};
