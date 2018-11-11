import { Action, IState } from '../common/interfaces';
import { channels } from './channels';
import { messages } from './messages';
import { user } from './user';
import { activeChannel } from './activeChannel';

export const rootReducer = (prevState = {} as IState, action: Action): IState => ({
  channels: channels(prevState.channels, action),
  messages: messages(prevState.messages, action),
  user: user(prevState.user, action),
  activeChannel: activeChannel(prevState.activeChannel, action)
});
