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
  readonly createdAt: UnixTime;
}

export interface IChannel {
  readonly id: Uuid;
  readonly name: string;
  readonly messages: Immutable.OrderedMap<Uuid, IMessage>;
  readonly allowedUsers: Immutable.Set<Uuid>;
}

export interface IUser {
  readonly id: Uuid;
  readonly email: string;
  readonly name: string;
  readonly avatarUrl: string;
}

export interface IChannels {
  readonly byId: Immutable.List<Uuid>;
  readonly all: Immutable.Map<Uuid, IChannel>;
}

export interface IState {
  channels: IChannels;
  users: Immutable.Map<Uuid, IUser>;
  currentUser: Uuid;
  activeChannel: Uuid;
  appId: Uuid;
}
