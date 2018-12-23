import axios from 'axios';
import * as Immutable from 'immutable';

import { userBaseUrl } from './config';
import { IUser } from '../common/interfaces';

const mapResponseToUser = (user: any): IUser => ({
  email: user.email,
  name: user.customData.name,
  avatarUrl: user.customData.avatarUrl
});

const mapUserToJson = (email: string, name: string, avatarUrl: string): object => ({
  email,
  customData: {
    name,
    avatarUrl
  }
});

export const getUsers = async (): Promise<Immutable.Map<string, IUser>> => {
  const { data } = await axios.get(`${userBaseUrl}/user`);

  return Immutable.Map(
    data.map((user: any) => [user.email, mapResponseToUser(data)])
  );
};

export const registerUser = async (email: string, name: string, avatarUrl: string): Promise<IUser> => {
  const userData = mapUserToJson(email, name, avatarUrl);

  const { data } = await axios.post(`${userBaseUrl}/user`, userData);
  return mapResponseToUser(data);
};

export const updateUser = async (user: IUser): Promise<IUser> => {
  const userData = {
    customData: {
      name: user.name,
      avatarUrl: user.avatarUrl
    }
  };

  const { data } = await axios.put(`${userBaseUrl}/user/${user.email}`, userData);
  return mapResponseToUser(data);
};
