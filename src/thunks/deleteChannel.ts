import { Dispatch } from 'redux';

import { Uuid } from '../common/interfaces';
import { deleteChannel as deleteChannelApi } from '../api/channels';
import { deleteChannel } from '../actions/actionCreators';


export const deleteChannelThunk = (id: Uuid): any =>
  async (dispatch: Dispatch) => {
    deleteChannelApi(id);

    dispatch(deleteChannel(id));
  };
