import * as Immutable from 'immutable';

import { Uuid, IChannel, Action } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_RENAME } from '../constants/actionTypes';

export const channels = (prevState: Immutable.Map<Uuid, IChannel>, action: Action): Immutable.Map<Uuid, IChannel> => {
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
      const messages = oldChannel === undefined ? Immutable.List<Uuid>() : oldChannel.messages;

      return prevState.set(id, {
        id,
        name: newName,
        messages
      });
    }

    default: {
      return prevState;
    }
  }
};
