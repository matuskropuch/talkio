import { Action } from 'redux';

import { TOGGLE_PROFILE_WINDOW } from '../constants/actionTypes';


export const isProfileOpen = (prevState: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case TOGGLE_PROFILE_WINDOW: {
      return !prevState;
    }

    default: {
      return prevState;
    }
  }
};
