import * as Immutable from 'immutable';

import { Action, Uuid, IMessage, IChannel, IUser } from '../common/interfaces';
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
  CHANNEL_ORDER_CHANGE,
  MESSAGES_LOAD,
  USER_LOGOUT,
  CHANNEL_ADD_ALLOWED_USER,
  TOGGLE_PROFILE_WINDOW,
  USER_UPDATE
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

export const channelAddAllowedUser = (channel: IChannel): Action => ({
  type: CHANNEL_ADD_ALLOWED_USER,
  payload: {
    channel
  }
});

export const loadMessagesForChannel = (channelId: Uuid, messages: Immutable.OrderedMap<Uuid, IMessage>): Action => ({
  type: MESSAGES_LOAD,
  payload: {
    channelId,
    messages
  }
});

export const sendMessage = (channelId: Uuid, message: IMessage): Action => ({
  type: MESSAGE_SEND,
  payload: {
    channelId,
    message
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

export const userLogout = (): Action => ({
  type: USER_LOGOUT
});

export const userUpdate = (user: IUser): Action => ({
  type: USER_UPDATE,
  payload: {
    user
  }
});

export const openProfile = (): Action => ({
  type: TOGGLE_PROFILE_WINDOW
});

export const closeProfile = (): Action => ({
  type: TOGGLE_PROFILE_WINDOW
});
