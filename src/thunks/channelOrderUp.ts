import * as Immutable from 'immutable';
import { Dispatch } from 'redux';

import { Uuid, IState } from '../common/interfaces';
import { channelOrderChange } from '../actions/actionCreators';
import { updateUser } from '../api/users';

const moveChannelUp = (oldChannelOrder: Immutable.List<Uuid>, id: Uuid): Immutable.List<Uuid> => {
  const channelIdIndex = oldChannelOrder.indexOf(id);
  if (channelIdIndex === 0) {
    return oldChannelOrder;
  }

  const temp = oldChannelOrder.get(channelIdIndex - 1);
  if (temp === undefined) {
    return oldChannelOrder;
  }

  return oldChannelOrder.set(channelIdIndex - 1, id).set(channelIdIndex, temp);
};

export const channelOrderUpThunk = (id: Uuid): any =>
  async (dispatch: Dispatch, getState: () => IState) => {
    const { users, currentUser } = getState();
    const oldUser = users.get(currentUser)!;

    const newChannelOrder = moveChannelUp(oldUser.channelOrder, id);
    updateUser({
      ...oldUser,
      channelOrder: newChannelOrder
    });
    dispatch(channelOrderChange(newChannelOrder));
  };
