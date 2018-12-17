import * as Immutable from 'immutable';
import axios from 'axios';

import { baseUrl } from './config';
import { Uuid, IMessage } from '../common/interfaces';

const mapResponseToMessage = (message: any): IMessage => ({
  id: message.id,
  text: message.value,
  author: message.createdBy,
  createdAt: message.createdAt,
  score: message.customData.score
});

const mapMessageToJson = (message: IMessage): object => ({
  id: message.id,
  value: message.text,
  createdAt: message.createdAt,
  createdBy: message.author,
  updatedAt: '',
  updatedBy: '',
  customData: {
    score: message.score
  }
});

export const getMessagesForChannel = async (channelId: Uuid): Promise<Immutable.OrderedMap<Uuid, IMessage>> => {
  const { data } = await axios.get(`${baseUrl}/channel/${channelId}/message`);

  return Immutable.OrderedMap<Uuid, IMessage>(
    data.map((message: any) => [message.id, mapResponseToMessage(message)])
  );
};

export const postMessage = async (channelId: Uuid, message: IMessage): Promise<IMessage> => {
  const messageData = mapMessageToJson(message);

  const { data } = await axios.post(`${baseUrl}/channel/${channelId}/message`, messageData);
  return mapResponseToMessage(data);
};

export const updateMessage = async (channelId: Uuid, message: IMessage): Promise<IMessage> => {
  const messageData = {
    value: message.text,
    customData: {
      score: message.score
    }
  };

  const { data } = await axios.put(`${baseUrl}/channel/${channelId}/message/${message.id}`, messageData);
  return mapResponseToMessage(data);
};

export const deleteMessage = async (channelId: Uuid, message: IMessage): Promise<void> => {
  await axios.delete(`${baseUrl}/channel/${channelId}/message/${message.id}`);
};
