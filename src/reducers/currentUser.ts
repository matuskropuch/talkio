import { Action } from '../common/interfaces';
import { USER_LOGIN, USER_LOGOUT } from '../constants/actionTypes';

export const currentUser = (prevState: string = '', action: Action): string => {
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload.email;
    }

    case USER_LOGOUT: {
      return '';
    }

    default: {
      return prevState;
    }
  }
};
