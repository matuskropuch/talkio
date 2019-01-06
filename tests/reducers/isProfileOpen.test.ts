import { isProfileOpen } from '../../src/reducers/isProfileOpen';
import { TOGGLE_PROFILE_WINDOW } from '../../src/constants/actionTypes';

describe('test action on isProfileOpen reducer', () => {
  test('TOGGLE_PROFILE_WINDOW action, prevState is true', () => {
    const toggleProfileWindowAction = {
      type: TOGGLE_PROFILE_WINDOW
    };
    const newState = isProfileOpen(true, toggleProfileWindowAction);

    expect(newState).toBe(false);
  });

  test('TOGGLE_PROFILE_WINDOW action, prevState is false', () => {
    const toggleProfileWindowAction = {
      type: TOGGLE_PROFILE_WINDOW
    };
    const newState = isProfileOpen(false, toggleProfileWindowAction);

    expect(newState).toBe(true);
  });
});
