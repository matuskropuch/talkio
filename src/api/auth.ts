import axios from 'axios';

export const auth = async (email: string): Promise<string> => {
  const { data } = await axios.post('https://pv247messaging.azurewebsites.net/api/v2/auth', { email });

  return data.token;
};
