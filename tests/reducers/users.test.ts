import * as Immutable from 'immutable';

import { users } from '../../src/reducers/users';
import { USERS_LOAD, USER_UPDATE } from '../../src/constants/actionTypes';
import { currentUser } from '../testingStateConstants';
import { IUser } from '../../src/common/interfaces';

describe('test actions on users reducer', () => {
  test('USERS_LOAD action', () => {
    const usersLoadAction = {
      type: USERS_LOAD,
      payload: {
        users
      }
    };
    const newState = users(Immutable.Map(), usersLoadAction);

    expect(newState).toEqual(users);
  });

  test('USER_UPDATE action', () => {
    const updatedUser: IUser = {
      ...currentUser,
      name: 'psyke, updated user'
    };
    const userUpdateAction = {
      type: USER_UPDATE,
      payload: {
        user: updatedUser
      }
    };
    const newState = users(Immutable.Map([[currentUser.email, currentUser]]), userUpdateAction);

    expect(newState).toEqual(Immutable.Map([[updatedUser.email, updatedUser]]));
  });
});
