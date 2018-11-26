import { combineReducers } from 'redux';

import { channels } from './channels';
import { users } from './users';
import { currentUser } from './currentUser';
import { activeChannel } from './activeChannel';
import { appId } from './appId';

export const rootReducer = combineReducers({channels, users, currentUser, activeChannel, appId});
