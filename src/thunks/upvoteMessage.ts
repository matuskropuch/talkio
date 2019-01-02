import { Dispatch } from 'redux';

import { Uuid, IState } from '../common/interfaces';
import { upvoteMessage } from '../actions/actionCreators';
import { updateMessage } from '../api/messages';


export const upvoteMessageThunk = (channelId: Uuid, messageId: Uuid): any =>
  (dispatch: Dispatch, getState: () => IState) => {
    const channel = getState().channels.all.get(channelId);
    if (channel === undefined) {
      throw new Error('Upvoting message in nonexisting channel');
    }

    const oldMessage = channel.messages.get(messageId);
    if (oldMessage === undefined) {
      throw new Error('Upvoting nonexisting message');
    }

    updateMessage(channelId, {
      ...oldMessage,
      score: oldMessage.score + 1
    });

    dispatch(upvoteMessage(channelId, messageId));
  };
