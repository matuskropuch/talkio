import { Dispatch } from 'redux';

import { IState } from '../common/interfaces';
import { updateChannel as updateChannelApi } from '../api/channels';
import { channelAddAllowedUser } from '../actions/actionCreators';


export const channelAddAllowedUserThunk = (email: string): any =>
  async (dispatch: Dispatch, getState: () => IState) => {
    const oldChannel = getState().channels.all.get(getState().activeChannel);
    if (oldChannel === undefined) {
      throw new Error('Adding user to nonexisting channel');
    }

    const newChannel = await updateChannelApi({
      ...oldChannel,
      allowedUsers: oldChannel.allowedUsers.add(email)
    });

    dispatch(channelAddAllowedUser(newChannel));
  };
