import { combineReducers } from 'redux';

import { channels } from './channels';
import { messages } from './messages';
import { user } from './user';
import { activeChannel } from './activeChannel';

export const rootReducer = combineReducers({channels, messages, user, activeChannel});
