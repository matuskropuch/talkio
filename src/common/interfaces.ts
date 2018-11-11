import * as Immutable from 'immutable';

export type Uuid = string;
export type UnixTime = number;

export interface Action {
  type: string;
  payload?: any;
}

export interface IMessage {
  readonly id: Uuid;
  readonly text: string;
  readonly author: string;
  readonly score: number;
  readonly timestamp: UnixTime;
}

export interface IChannel {
  readonly id: Uuid;
  readonly name: string;
  readonly messages: Immutable.List<Uuid>;
}

export interface IUser {
  readonly email: string;
  readonly name: string;
  readonly avatarUrl: string;
}

export interface IState {
  channels: Immutable.Map<Uuid, IChannel>;
  messages: Immutable.Map<Uuid, IMessage>;
  user: IUser;
  activeChannel: Uuid;
}