import * as Immutable from 'immutable';

import { Uuid, IMessage, Action } from '../common/interfaces';
import { CHANNEL_DELETE, MESSAGE_SEND } from '../constants/actionTypes';

export const messages = (prevState: Immutable.Map<Uuid, IMessage> = Immutable.Map(), action: Action): Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case CHANNEL_DELETE: {
      return prevState.deleteAll(action.payload.messagesToDelete);
    }

    case MESSAGE_SEND: {
      const message = action.payload.message;

      return prevState.set(message.id, message);
    }

    default: {
      return prevState;
    }
  }
};
