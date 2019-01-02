import * as uuid from 'uuid';
import * as Immutable from 'immutable';

import { Action, Uuid, IMessage, IChannel } from '../common/interfaces';
import {
  CHANNEL_CREATE,
  CHANNEL_SELECT,
  CHANNEL_DELETE,
  CHANNEL_RENAME,
  MESSAGE_SEND,
  MESSAGE_UPVOTE,
  MESSAGE_DOWNVOTE,
  MESSAGE_DELETE,
  USER_LOGIN,
  CHANNEL_ORDER_CHANGE
} from '../constants/actionTypes';

export const createChannel = (channel: IChannel): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    channel
  }
});

export const selectChannel = (channelId: Uuid): Action => ({
  type: CHANNEL_SELECT,
  payload: {
    channelId
  }
});

export const deleteChannel = (channelId: Uuid): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    channelId
  }
});

export const renameChannel = (channel: IChannel): Action => ({
  type: CHANNEL_RENAME,
  payload: {
    channel
  }
});

export const channelOrderChange = (channelOrder: Immutable.List<Uuid>): Action => ({
  type: CHANNEL_ORDER_CHANGE,
  payload: {
    channelOrder
  }
});

export const sendMessage = (channelId: Uuid, text: string): Action => ({
  type: MESSAGE_SEND,
  payload: {
    channelId,
    message: {
      id: uuid(),
      author: 'asdf',
      score: 0,
      text,
      createdAt: Date.now()
    } as IMessage
  }
});

export const deleteMessage = (channelId: Uuid, messageId: Uuid): Action => ({
  type: MESSAGE_DELETE,
  payload: {
    channelId,
    messageId
  }
});

export const upvoteMessage = (channelId: Uuid, messageId: Uuid): Action => ({
  type: MESSAGE_UPVOTE,
  payload: {
    channelId,
    messageId
  }
});

export const downvoteMessage = (channelId: Uuid, messageId: Uuid): Action => ({
  type: MESSAGE_DOWNVOTE,
  payload: {
    channelId,
    messageId
  }
});

export const userLogin = (email: string): Action => ({
  type: USER_LOGIN,
  payload: {
    email
  }
});
