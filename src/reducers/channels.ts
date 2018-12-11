import * as Immutable from 'immutable';

import { Uuid, IChannel, Action, IMessage } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_RENAME, MESSAGE_SEND, MESSAGE_UPVOTE, MESSAGE_DOWNVOTE, MESSAGE_DELETE } from '../constants/actionTypes';

export const channels = (prevState: Immutable.Map<Uuid, IChannel> = Immutable.Map(), action: Action): Immutable.Map<Uuid, IChannel> => {
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
    case CHANNEL_CREATE: {
      const { id, name, creatorId } = action.payload;

      return prevState.set(action.payload.id, {
        id,
        name,
        messages: Immutable.Map<Uuid, IMessage>(),
        allowedUsers: Immutable.Set<Uuid>(creatorId)
      });
    }

    case CHANNEL_DELETE: {
      return prevState.delete(action.payload.id);
    }

    case CHANNEL_RENAME: {
      const {channelId, newName} = action.payload;
      const oldChannel = getChannel('Renaming nonexistent channel');

      const newChannel: IChannel = {
        ...oldChannel,
        name: newName
      };

      return prevState.set(channelId, newChannel);
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
