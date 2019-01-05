import { Dispatch } from 'redux';
import { ContentState } from 'draft-js';

import { Uuid } from '../common/interfaces';
import { sendMessage } from '../actions/actionCreators';
import { postMessage } from '../api/messages';

export const sendMessageThunk = (channelId: Uuid, text: ContentState): any =>
  async (dispatch: Dispatch) => {
    const message = await postMessage(channelId, text, 0);

    dispatch(sendMessage(channelId, message));
  };
