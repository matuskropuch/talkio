import { Dispatch } from 'redux';
import * as Immutable from 'immutable';

import { getChannels } from '../api/channels';
import { Uuid, IChannel, Action, IState } from '../common/interfaces';
import { CHANNELS_LOAD } from '../constants/actionTypes';
import { updateUser } from '../api/users';
import { selectChannel } from '../actions/actionCreators';

const loadChannels = (channels: Immutable.Map<Uuid, IChannel>, channelOrder: Immutable.List<Uuid>): Action => ({
  type: CHANNELS_LOAD,
  payload: {
    channels,
    channelOrder
  }
});

export const loadChannelsThunk = (): any =>
  async (dispatch: Dispatch, getState: () => IState) => {
    const channels = await getChannels();
    const { users, currentUser } = getState();
    const allowedChannels = channels.filter(channel => channel.allowedUsers.contains(currentUser));
    let channelOrder = users.get(currentUser)!.channelOrder;

    if (allowedChannels.size > channelOrder.size) {
      channelOrder = channelOrder.push(
        ...allowedChannels.toList()
          .filter(channel => !channelOrder.contains(channel.id))
          .map(channel => channel.id)
      );

      await updateUser({
        ...users.get(currentUser)!,
        channelOrder
      });
    }

    dispatch(loadChannels(channels, channelOrder));
    if (channelOrder.size >= 0) {
      dispatch(selectChannel(allowedChannels.get(channelOrder.first())!.id));
    }
  };
