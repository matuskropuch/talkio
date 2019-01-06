import * as Immutable from 'immutable';
import { Uuid, IUser, Action } from '../common/interfaces';
import { USERS_LOAD, USER_UPDATE } from '../constants/actionTypes';

export const users = (prevState: Immutable.Map<Uuid, IUser> = Immutable.Map(), action: Action): Immutable.Map<Uuid, IUser> => {
  switch (action.type) {
    case USERS_LOAD: {
      return action.payload.users;
    }

    case USER_UPDATE: {
      const { user } = action.payload;
      return prevState.set(user.email, user);
    }

    default: {
      return prevState;
    }
  }
};
