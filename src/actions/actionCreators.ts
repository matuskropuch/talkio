import * as uuid from 'uuid';

import { Action, Uuid, IMessage } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_SELECT, CHANNEL_DELETE, CHANNEL_RENAME, MESSAGE_SEND, MESSAGE_UPVOTE, MESSAGE_DOWNVOTE, MESSAGE_DELETE, CHANNEL_ORDER_UP, CHANNEL_ORDER_DOWN } from '../constants/actionTypes';

export const createChannel = (name: string, creatorId: Uuid): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    channelId: uuid(),
    name,
    creatorId
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

export const renameChannel = (channelId: Uuid, newName: string): Action => ({
  type: CHANNEL_RENAME,
  payload: {
    channelId,
    newName
  }
});

export const channelOrderUp = (channelId: Uuid): Action => ({
  type: CHANNEL_ORDER_UP,
  payload: {
    channelId
  }
});

export const channelOrderDown = (channelId: Uuid): Action => ({
  type: CHANNEL_ORDER_DOWN,
  payload: {
    channelId
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
