import * as Immutable from 'immutable';
import * as uuid from 'uuid';

import { Uuid, IChannel, IMessage, IUser, IState, IChannels } from './common/interfaces';

const currentUser: IUser = {
  email: 'jacob@boss.net',
  name: 'Jacob',
  avatarUrl: ''
};

const message: IMessage = {
  id: uuid(),
  text: 'Is this working?',
  author: 'Theresa',
  score: -10,
  createdAt: Date.now()
};

const message2: IMessage = {
  id: uuid(),
  text: 'Nope',
  author: 'James',
  score: -999,
  createdAt: Date.now()
};

const channelMessages: Immutable.Map<Uuid, IMessage> = Immutable.Map([
  [message.id, message],
  [message2.id, message2],
]);

const channel: IChannel = {
  id: uuid(),
  name: 'Channel 1',
  messages: channelMessages,
  allowedUsers: Immutable.Set<string>([currentUser.email])
};

const channel2: IChannel = {
  id: uuid(),
  name: 'Channel 2',
  messages: channelMessages,
  allowedUsers: Immutable.Set<string>([currentUser.email])
};

const allChannels: Immutable.Map<Uuid, IChannel> = Immutable.Map([
  [channel.id, channel],
  [channel2.id, channel2]
]);

const byIdChannels: Immutable.List<Uuid> = Immutable.List([channel.id, channel2.id]);

const channels: IChannels = {
  all: allChannels,
  byId: byIdChannels
};

export const defaultState: IState = {
  channels,
  users: Immutable.Map<string, IUser>([ [currentUser.email, currentUser] ]),
  currentUser: '',
  activeChannel: channel.id,
  appId: uuid()
};
