import * as Immutable from 'immutable';

import { Uuid, IMessage, Action } from '../common/interfaces';
import { CHANNEL_DELETE } from '../constants/actionTypes';

export const messages = (prevState: Immutable.Map<Uuid, IMessage>, action: Action): Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case CHANNEL_DELETE: {
      return prevState.deleteAll(action.payload.messagesToDelete);
    }
    default: {
      return prevState;
    }
  }
};
