import { Action, Uuid } from '../common/interfaces';
import { CHANNEL_SELECT } from '../constants/actionTypes';

export const activeChannel = (prevState: Uuid = '', action: Action): Uuid => {
  switch (action.type) {
    case CHANNEL_SELECT: {
      return action.payload.channelId;
    }

    default: {
      return prevState;
    }
  }
};
