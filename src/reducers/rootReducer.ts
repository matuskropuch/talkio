import { combineReducers } from 'redux';

import { channels } from './channels';
import { users } from './users';
import { currentUser } from './currentUser';
import { activeChannel } from './activeChannel';
import { appId } from './appId';
import { isProfileOpen } from './isProfileOpen';

export const rootReducer = combineReducers({channels, users, currentUser, activeChannel, appId, isProfileOpen});
