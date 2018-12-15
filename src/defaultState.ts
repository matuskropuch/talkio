import * as Immutable from 'immutable';
import * as uuid from 'uuid';

import { Uuid, IChannel, IMessage, IUser, IState, IChannels } from './common/interfaces';

const currentUser: IUser = {
  id: uuid(),
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
  allowedUsers: Immutable.Set<Uuid>([currentUser.id])
};

const channel2: IChannel = {
  id: uuid(),
  name: 'Channel 2',
  messages: channelMessages,
  allowedUsers: Immutable.Set<Uuid>([currentUser.id])
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
  users: Immutable.Map<Uuid, IUser>([ [currentUser.id, currentUser] ]),
  currentUser: currentUser.id,
  activeChannel: channel.id,
  appId: uuid()
};
