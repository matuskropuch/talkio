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
  CHANNEL_ORDER_UP,
  CHANNEL_ORDER_DOWN,
  CHANNELS_LOAD
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

    case CHANNEL_RENAME: {
      const { channel } = action.payload;

      return prevState.set(channel.id, channel);
    }

    case MESSAGE_SEND: {
      const { channelId, message } = action.payload;
      const oldChannel = getChannel('Submitting message to nonexistent channel');

      const newChannel: IChannel = {
        ...oldChannel,
        messages: oldChannel.messages.set(message.id, message)
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
    case CHANNEL_CREATE: {
      return prevState.push(action.payload.channel.id);
    }

    case CHANNEL_DELETE: {
      return prevState.filter((id: Uuid) => id !== action.payload.id);
    }

    case CHANNEL_ORDER_UP: {
      const { channelId } = action.payload;
      const channelIdIndex = prevState.indexOf(channelId);
      if (channelIdIndex === 0) {
        return prevState;
      }

      const temp = prevState.get(channelIdIndex - 1);
      if (temp === undefined) {
        return prevState;
      }
      return prevState.set(channelIdIndex - 1, channelId).set(channelIdIndex, temp);
    }

    case CHANNEL_ORDER_DOWN: {
      const { channelId } = action.payload;
      const channelIdIndex = prevState.indexOf(channelId);
      const temp = prevState.get(channelIdIndex + 1);

      if (temp === undefined) {
        return prevState;
      }
      return prevState.set(channelIdIndex + 1, channelId).set(channelIdIndex, temp);
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
