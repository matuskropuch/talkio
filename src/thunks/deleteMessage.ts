import { Dispatch } from 'redux';

import { Uuid } from '../common/interfaces';
import { deleteMessage } from '../actions/actionCreators';
import { deleteMessage as deleteMessageApi } from '../api/messages';


export const deleteMessageThunk = (channelId: Uuid, messageId: Uuid): any =>
  (dispatch: Dispatch) => {
    deleteMessageApi(channelId, messageId);

    dispatch(deleteMessage(channelId, messageId));
  };
