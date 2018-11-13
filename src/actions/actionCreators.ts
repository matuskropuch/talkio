import * as uuid from 'uuid';
import * as Immutable from 'immutable';

import { Action, Uuid, IMessage } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_SELECT, CHANNEL_DELETE, CHANNEL_RENAME, MESSAGE_SEND } from '../constants/actionTypes';

export const createChannel = (name: string): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    id: uuid(),
    name
  }
});

export const selectChannel = (id: Uuid): Action => ({
  type: CHANNEL_SELECT,
  payload: {
    id
  }
});

export const deleteChannel = (id: Uuid, messagesToDelete: Immutable.List<Uuid>): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    id,
    messagesToDelete
  }
});

export const renameChannel = (id: Uuid, newName: string): Action => ({
  type: CHANNEL_RENAME,
  payload: {
    id,
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
      timestamp: Date.now()
    } as IMessage
  }
});
