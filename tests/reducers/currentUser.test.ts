import { currentUser } from '../../src/reducers/currentUser';
import { USER_LOGIN, USER_LOGOUT } from '../../src/constants/actionTypes';
import { unknownAction } from '../testingStateConstants';

describe('test actions on currentUser reducer', () => {
  test('USER_LOGIN action', () => {
    const expectedState = 'test@test.test';
    const userLoginAction = {
      type: USER_LOGIN,
      payload: {
        email: 'test@test.test'
      }
    };
    const newState = currentUser('nottest@test.test', userLoginAction);

    expect(newState).toEqual(expectedState);
  });

  test('USER_LOGOUT action', () => {
    const expectedState = '';
    const userLogoutAction = {
      type: USER_LOGOUT,
    };
    const newState = currentUser('test@test.test', userLogoutAction);

    expect(newState).toEqual(expectedState);
  });

  test('unknown action', () => {
    const prevState = 'test@test.test';
    const newState = currentUser(prevState, unknownAction);

    expect(newState).toEqual(prevState);
  })
});