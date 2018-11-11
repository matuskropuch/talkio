import * as Immutable from 'immutable';
import * as uuid from 'uuid';

import { Uuid, IChannel, IMessage, IUser, IState } from './common/interfaces';

const message: IMessage = {
  id: uuid(),
  text: 'Is this working?',
  author: 'Theresa',
  score: -10,
  timestamp: Date.now()
};

const message2: IMessage = {
  id: uuid(),
  text: 'Nope',
  author: 'James',
  score: -999,
  timestamp: Date.now()
};

const messages: Immutable.Map<Uuid, IMessage> = Immutable.Map([
  [message.id, message],
  [message2.id, message2],
]);

const channel: IChannel = {
  id: uuid(),
  name: 'Channel 1',
  messages: Immutable.List<Uuid>([message.id])
};

const channel2: IChannel = {
  id: uuid(),
  name: 'Channel 2',
  messages: Immutable.List<Uuid>([message2.id])
};

const channels: Immutable.Map<Uuid, IChannel> = Immutable.Map([
  [channel.id, channel],
  [channel2.id, channel2]
]);

const user: IUser = {
  email: 'jacob@boss.net',
  name: 'Jacob',
  avatarUrl: ''
};

export const defaultState: IState = {
  channels,
  messages,
  user,
  activeChannel: channel.id
};
