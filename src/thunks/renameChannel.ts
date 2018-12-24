import { Dispatch } from 'redux';

import { updateChannel } from '../api/channels';
import { Uuid, IState, IChannel } from '../common/interfaces';
import { renameChannel } from '../actions/actionCreators';

export const renameChannelThunk = (id: Uuid, name: string): any =>
  async (dispatch: Dispatch, getState: () => IState) => {
    const oldChannel = getState().channels.all.get(id);
    if (oldChannel === undefined) {
      throw new Error('Renaming nonexisting channel');
    }

    const updatedChannel: IChannel = {
      ...oldChannel,
      name
    };

    const channel = await updateChannel(updatedChannel);

    dispatch(renameChannel(channel));
  };
