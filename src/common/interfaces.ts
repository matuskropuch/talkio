import * as Immutable from 'immutable';

export type Uuid = string;

export interface Action {
  type: string;
  payload?: any;
}

export interface IMessage {
  text: string;
  author: string;
  score: number;
  timestamp: Date;
}

export interface IChannel {
  name: string;
  messages: Immutable.List<Uuid>;
}

export interface IUser {
  email: string;
  name: string;
  avatarUrl: string;
}

export interface IState {
  channels: Immutable.Map<Uuid, IChannel>;
  messages: Immutable.Map<Uuid, IMessage>;
  user: IUser;
}
