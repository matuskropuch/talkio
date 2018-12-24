import axios from 'axios';
import * as Immutable from 'immutable';

import { baseUrl } from './config';

import { IChannel, Uuid, IMessage } from '../common/interfaces';

const mapResponseToChannel = (channel: any): IChannel => ({
  id: channel.id,
  name: channel.name,
  allowedUsers: Immutable.Set<Uuid>(channel.customData.allowedUsers),
  messages: Immutable.OrderedMap<Uuid, IMessage>()
});

const mapChannelToJson = (name: string, allowedUsers: Immutable.Set<Uuid>): object => ({
  name,
  customData: {
    allowedUsers: allowedUsers.toJSON()
  }
});

export const getChannels = async (): Promise<Immutable.Map<Uuid, IChannel>> => {
  const response = await axios.get(`${baseUrl}/channel`);
  return Immutable.Map(
    response.data.map((channel: any): [Uuid, IChannel] => [channel.id, mapResponseToChannel(channel)])
  );
};

export const postChannel = async (name: string, allowedUsers: Immutable.Set<Uuid>): Promise<IChannel> => {
  const channelData = mapChannelToJson(name, allowedUsers);

  const { data } = await axios.post(`${baseUrl}/channel`, channelData);
  return mapResponseToChannel(data);
};

export const deleteChannel = async (channelId: Uuid): Promise<void> => {
  await axios.delete(`${baseUrl}/channel/${channelId}`);
};

export const updateChannel = async (channel: IChannel): Promise<IChannel> => {
  const channelData = mapChannelToJson(channel.name, channel.allowedUsers);

  const response = await axios.put(`${baseUrl}/channel/${channel.id}`, channelData);
  const updatedChannel: IChannel = mapResponseToChannel(response.data);

  return updatedChannel;
};
