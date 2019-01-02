import { Dispatch } from 'redux';

import { Uuid } from '../common/interfaces';
import { sendMessage } from '../actions/actionCreators';
import { postMessage } from '../api/messages';

export const sendMessageThunk = (channelId: Uuid, text: string): any =>
  async (dispatch: Dispatch) => {
    const message = await postMessage(channelId, text, 0);

    dispatch(sendMessage(channelId, message));
  };
