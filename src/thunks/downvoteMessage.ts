import { Dispatch } from 'redux';

import { Uuid, IState } from '../common/interfaces';
import { downvoteMessage } from '../actions/actionCreators';
import { updateMessage } from '../api/messages';


export const downvoteMessageThunk = (channelId: Uuid, messageId: Uuid): any =>
  (dispatch: Dispatch, getState: () => IState) => {
    const channel = getState().channels.all.get(channelId);
    if (channel === undefined) {
      throw new Error('Downvoting message in nonexisting channel');
    }

    const oldMessage = channel.messages.get(messageId);
    if (oldMessage === undefined) {
      throw new Error('Downvoting nonexisting message');
    }

    updateMessage(channelId, {
      ...oldMessage,
      score: oldMessage.score - 1
    });

    dispatch(downvoteMessage(channelId, messageId));
  };
