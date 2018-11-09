import * as Immutable from 'immutable';
// import * as uuid from 'uuid';
import { Uuid, IChannel, IMessage, IUser } from './common/interfaces';

const channel: IChannel = {
  name: 'Channel 1',
  messages: Immutable.List<Uuid>(['1', '2', '3'])
};

const channel2: IChannel = {
  name: 'Channel 2',
  messages: Immutable.List<Uuid>(['4', '5', '6'])
};

const channels: Immutable.Map<Uuid, IChannel> = Immutable.Map([
  ['1', channel],
  ['2', channel2]
]);

const message: IMessage = {
  text: 'Is this working?',
  author: 'Theresa',
  score: -10,
  timestamp: Date.now()
};

const message2: IMessage = {
  text: 'Nope',
  author: 'James',
  score: -999,
  timestamp: Date.now()
};

const messages: Immutable.Map<Uuid, IMessage> = Immutable.Map([
  ['1', message],
  ['2', message2],
  ['3', message],
  ['4', message2],
  ['5', message],
  ['6', message2],
]);

const user: IUser = {
  email: 'jacob@boss.net',
  name: 'Jacob',
  avatarUrl: ''
};

export const defaultState = {
  channels,
  messages,
  user
};
