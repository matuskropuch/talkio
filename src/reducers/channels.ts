import * as Immutable from 'immutable';

import { Uuid, IChannel, Action } from '../common/interfaces';
import { CHANNEL_CREATE } from '../constants/actionTypes';

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

    default: {
      return prevState;
    }
  }
};
