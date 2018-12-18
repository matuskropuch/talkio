import { Action, Uuid } from '../common/interfaces';
import { USER_LOGIN } from '../constants/actionTypes';

export const currentUser = (prevState: Uuid = '', action: Action): Uuid => {
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload.id;
    }

    default: {
      return prevState;
    }
  }
};
