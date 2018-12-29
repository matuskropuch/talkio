import { Dispatch } from 'redux';

import { Uuid, IState } from '../common/interfaces';
import { deleteChannel as deleteChannelApi } from '../api/channels';
import { deleteChannel } from '../actions/actionCreators';
import { updateUser } from '../api/users';


export const deleteChannelThunk = (id: Uuid): any =>
  (dispatch: Dispatch, getState: () => IState) => {
    const { users, currentUser } = getState();
    const oldUser = users.get(currentUser)!;

    deleteChannelApi(id);
    updateUser({
      ...oldUser,
      channelOrder: oldUser.channelOrder.delete(oldUser.channelOrder.indexOf(id))
    });

    dispatch(deleteChannel(id));
  };
