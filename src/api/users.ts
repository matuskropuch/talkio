import axios from 'axios';
import * as Immutable from 'immutable';

import { userBaseUrl } from './config';
import { IUser, Uuid } from '../common/interfaces';

const mapResponseToUser = (user: any): IUser => ({
  email: user.email,
  name: user.customData.name,
  avatarUrl: user.customData.avatarUrl,
  channelOrder: Immutable.List<Uuid>(user.customData.channelOrder)
});

const mapUserToJson = (email: string, name: string, avatarUrl: string, channelOrder: Immutable.List<Uuid>): object => ({
  email,
  customData: {
    name,
    avatarUrl,
    channelOrder: channelOrder.toJSON()
  }
});

export const getUsers = async (): Promise<Immutable.Map<string, IUser>> => {
  const { data } = await axios.get(`${userBaseUrl}/user`);

  return Immutable.Map(
    data.map((user: any) => [user.email, mapResponseToUser(user)])
  );
};

export const registerUser = async (email: string, name: string, avatarUrl: string, channelOrder: Immutable.List<Uuid>): Promise<IUser> => {
  const userData = mapUserToJson(email, name, avatarUrl, channelOrder);

  const { data } = await axios.post(`${userBaseUrl}/user`, userData);
  return mapResponseToUser(data);
};

export const updateUser = async (user: IUser): Promise<IUser> => {
  const userData = {
    customData: {
      name: user.name,
      avatarUrl: user.avatarUrl,
      channelOrder: user.channelOrder.toJSON()
    }
  };

  const { data } = await axios.put(`${userBaseUrl}/user/${user.email}`, userData);
  return mapResponseToUser(data);
};
