import * as Immutable from 'immutable';
import * as uuid from 'uuid';

import { Uuid, IChannel, IMessage, IUser, IState, IChannels } from '../src/common/interfaces';
import { ContentState } from 'draft-js';
import { Action } from 'redux';

export const currentUser: IUser = {
  email: 'jacob@boss.net',
  name: 'Jacob',
  avatarUrl: '',
  channelOrder: Immutable.List()
};

export const message: IMessage = {
  id: 'message1',
  text: ContentState.createFromText('Is this working?'),
  author: 'Theresa',
  score: -10,
  createdAt: Date.now()
};

export const message2: IMessage = {
  id: 'message2',
  text: ContentState.createFromText('Nope'),
  author: 'James',
  score: -999,
  createdAt: Date.now()
};

export const channelMessages: Immutable.Map<Uuid, IMessage> = Immutable.Map([
  [message.id, message],
  [message2.id, message2],
]);

export const channel: IChannel = {
  id: 'channel',
  name: 'Channel 1',
  messages: channelMessages,
  allowedUsers: Immutable.Set<string>([currentUser.email])
};

export const channel2: IChannel = {
  id: 'channel2',
  name: 'Channel 2',
  messages: channelMessages,
  allowedUsers: Immutable.Set<string>([currentUser.email])
};

export const allChannels: Immutable.Map<Uuid, IChannel> = Immutable.Map([
  [channel.id, channel],
  [channel2.id, channel2]
]);

export const byIdChannels: Immutable.List<Uuid> = Immutable.List([channel.id, channel2.id]);

export const channels: IChannels = {
  all: allChannels,
  byId: byIdChannels
};

export const users = Immutable.Map<string, IUser>([[currentUser.email, currentUser]]);

export const defaultState: IState = {
  channels,
  users,
  currentUser: '',
  activeChannel: channel.id,
  appId: uuid(),
  isProfileOpen: false
};

export const unknownAction: Action = {
  type: 'unknown action'
};
