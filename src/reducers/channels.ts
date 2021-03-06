import * as Immutable from 'immutable';
import { combineReducers } from 'redux';

import { Uuid, IChannel, Action, IMessage, IChannels } from '../common/interfaces';
import {
  CHANNEL_CREATE,
  CHANNEL_DELETE,
  CHANNEL_RENAME,
  MESSAGE_SEND,
  MESSAGE_UPVOTE,
  MESSAGE_DOWNVOTE,
  MESSAGE_DELETE,
  CHANNELS_LOAD,
  CHANNEL_ORDER_CHANGE,
  MESSAGES_LOAD,
  CHANNEL_ADD_ALLOWED_USER
} from '../constants/actionTypes';

const all = (prevState: Immutable.Map<Uuid, IChannel> = Immutable.Map(), action: Action): Immutable.Map<Uuid, IChannel> => {
  const getChannel = (errorMessage: string): IChannel => {
    const channel = prevState.get(action.payload.channelId);

    if (channel === undefined) {
      throw Error(errorMessage);
    }
    return channel;
  };

  const getMessage = (channel: IChannel, errorMessage: string): IMessage => {
    const message = channel.messages.get(action.payload.messageId);

    if (message === undefined) {
      throw Error(errorMessage);
    }
    return message;
  };

  switch (action.type) {
    case CHANNELS_LOAD: {
      return action.payload.channels;
    }

    case CHANNEL_CREATE: {
      const { channel } = action.payload;

      return prevState.set(channel.id, channel);
    }

    case CHANNEL_DELETE: {
      return prevState.delete(action.payload.channelId);
    }

    case CHANNEL_ADD_ALLOWED_USER:
    case CHANNEL_RENAME: {
      const { channel } = action.payload;

      return prevState.set(channel.id, channel);
    }

    case MESSAGES_LOAD: {
      const { channelId, messages } = action.payload;
      const oldChannel = getChannel('Loading messages to nonexistent channel');

      const newChannel: IChannel = {
        ...oldChannel,
        messages
      };

      return prevState.set(channelId, newChannel);
    }

    case MESSAGE_SEND: {
      const { channelId, message } = action.payload;
      const oldChannel = getChannel('Submitting message to nonexistent channel');

      const newChannel: IChannel = {
        ...oldChannel,
        messages: oldChannel.messages.reverse().set(message.id, message).reverse()
      };

      return prevState.set(channelId, newChannel);
    }

    case MESSAGE_DELETE: {
      const { channelId, messageId } = action.payload;
      const oldChannel = getChannel('Deleting message from nonexistent channel');

      const newChannel: IChannel =  {
        ...oldChannel,
        messages: oldChannel.messages.delete(messageId)
      };

      return prevState.set(channelId, newChannel);
    }

    case MESSAGE_UPVOTE: {
      const { channelId, messageId } = action.payload;

      const oldChannel = getChannel('Upvoting message in nonexistent channel');
      const oldMessage = oldChannel.messages.get(messageId);

      if (oldMessage === undefined) {
        throw Error('Upvoting nonexistent message');
      }

      const newMessage = {
        ...oldMessage,
        score: oldMessage.score + 1
      };

      return prevState.set(channelId, {
        ...oldChannel,
        messages: oldChannel.messages.set(messageId, newMessage)
      });
    }

    case MESSAGE_DOWNVOTE: {
      const { channelId, messageId } = action.payload;

      const oldChannel = getChannel('Downvoting message in nonexistent channel');
      const oldMessage = getMessage(oldChannel, 'Downvoting nonexistent message');

      const newMessage = {
        ...oldMessage,
        score: oldMessage.score - 1
      };

      return prevState.set(channelId, {
        ...oldChannel,
        messages: oldChannel.messages.set(messageId, newMessage)
      });
    }

    default: {
      return prevState;
    }
  }
};

const byId = (prevState: Immutable.List<Uuid> = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case CHANNELS_LOAD: {
      return action.payload.channelOrder;
    }

    case CHANNEL_CREATE: {
      return prevState.push(action.payload.channel.id);
    }

    case CHANNEL_DELETE: {
      return prevState.filter((id: Uuid) => id !== action.payload.channelId);
    }

    case CHANNEL_ORDER_CHANGE: {
      return action.payload.channelOrder;
    }

    default: {
      return prevState;
    }
  }
};

export const channels = combineReducers<IChannels>({
  all,
  byId
});
