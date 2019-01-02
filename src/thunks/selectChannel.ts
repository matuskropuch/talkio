import { Dispatch } from 'redux';

import { Uuid } from '../common/interfaces';
import { selectChannel, loadMessagesForChannel } from '../actions/actionCreators';
import { getMessagesForChannel } from '../api/messages';


export const selectChannelThunk = (channelId: Uuid): any =>
  async (dispatch: Dispatch) => {
    const messages = await getMessagesForChannel(channelId);

    dispatch(loadMessagesForChannel(channelId, messages));
    dispatch(selectChannel(channelId));
  };
