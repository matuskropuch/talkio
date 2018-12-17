import axios from 'axios';
import * as Immutable from 'immutable';

import { baseUrl } from './config';

import { IChannel, Uuid, IMessage, IChannels } from '../common/interfaces';

const mapResponseToChannel = (channel: any): IChannel => ({
  id: channel.id,
  name: channel.name,
  allowedUsers: Immutable.Set<Uuid>(channel.customData.allowedUsers),
  messages: Immutable.OrderedMap<Uuid, IMessage>()
});

const mapChannelToJson = (channel: IChannel): object => ({
  name: channel.name,
  customData: {
    allowedUsers: channel.allowedUsers.toJSON()
  }
});

export const getChannels = async (): Promise<IChannels> => {
  const response = await axios.get(`${baseUrl}/channel`);
  const all = Immutable.Map<Uuid, IChannel>(
    response.data.json().map((channel: any): [Uuid, IChannel] => [channel.id, mapResponseToChannel(channel)])
  );

  const byId = Immutable.List<Uuid>(
    response.data.json().map((channel: any): Uuid => channel.id)
  );

  return { all, byId };
};

export const postChannel = async (channel: IChannel): Promise<IChannel> => {
  const channelData = mapChannelToJson(channel);

  const { data } = await axios.post(`${baseUrl}/channel`, channelData);
  return mapResponseToChannel(data);
};

export const deleteChannel = async (channelId: Uuid): Promise<void> => {
  await axios.delete(`${baseUrl}/channel/${channelId}`);
};

export const updateChannel = async (channel: IChannel): Promise<IChannel> => {
  const channelData = mapChannelToJson(channel);

  const response = await axios.put(`${baseUrl}/channel/${channel.id}`, channelData);
  const updatedChannel: IChannel = mapResponseToChannel(response.data);

  return updatedChannel;
};
