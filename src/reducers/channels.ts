import * as Immutable from 'immutable';

import { Uuid, IChannel, Action } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_RENAME, MESSAGE_SEND } from '../constants/actionTypes';

export const channels = (prevState: Immutable.Map<Uuid, IChannel> = Immutable.Map(), action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNEL_CREATE: {
      const { id, name } = action.payload;

      return prevState.set(action.payload.id, {
        id,
        name,
        messages: Immutable.List<Uuid>()
      });
    }

    case CHANNEL_DELETE: {
      return prevState.delete(action.payload.id);
    }

    case CHANNEL_RENAME: {
      const {id, newName} = action.payload;
      const oldChannel = prevState.get(id);

      if (oldChannel === undefined) {
        throw Error('Renaming nonexistent channel');
      }

      return prevState.set(id, {
        ...oldChannel,
        name: newName
      });
    }

    case MESSAGE_SEND: {
      const { channelId, message } = action.payload;
      const oldChannel = prevState.get(channelId);

      if (oldChannel === undefined) {
        throw Error('Submitting message to nonexistent channel');
      }

      const newChannel: IChannel = {
        ...oldChannel,
        messages: oldChannel.messages.push(message.id)
      };

      return prevState.set(newChannel.id, newChannel);
    }

    default: {
      return prevState;
    }
  }
};
