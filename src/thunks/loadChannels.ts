import { Dispatch } from 'redux';
import * as Immutable from 'immutable';

import { getChannels } from '../api/channels';
import { Uuid, IChannel, Action } from '../common/interfaces';
import { CHANNELS_LOAD } from '../constants/actionTypes';

const loadChannels = (channels: Immutable.Map<Uuid, IChannel>): Action => ({
  type: CHANNELS_LOAD,
  payload: {
    channels
  }
});

export const loadChannelsThunk = (): any =>
  async (dispatch: Dispatch) => {
    const channels = await getChannels();

    dispatch(loadChannels(channels));
  };
