import * as uuid from 'uuid';

import { Action, Uuid, IMessage } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_SELECT, CHANNEL_DELETE, CHANNEL_RENAME, MESSAGE_SEND, MESSAGE_UPVOTE, MESSAGE_DOWNVOTE, MESSAGE_DELETE } from '../constants/actionTypes';

export const createChannel = (name: string, creatorId: Uuid): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    id: uuid(),
    name,
    creatorId
  }
});

export const selectChannel = (id: Uuid): Action => ({
  type: CHANNEL_SELECT,
  payload: {
    id
  }
});

export const deleteChannel = (id: Uuid): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    id
  }
});

export const renameChannel = (channelId: Uuid, newName: string): Action => ({
  type: CHANNEL_RENAME,
  payload: {
    channelId,
    newName
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
