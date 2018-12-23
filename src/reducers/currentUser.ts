import { Action } from '../common/interfaces';
import { USER_LOGIN } from '../constants/actionTypes';

export const currentUser = (prevState: string = '', action: Action): string => {
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload.email;
    }

    default: {
      return prevState;
    }
  }
};
