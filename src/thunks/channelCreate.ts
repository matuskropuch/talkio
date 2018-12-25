import { Dispatch } from 'redux';
import * as Immutable from 'immutable';

import { IState } from '../common/interfaces';
import { createChannel } from '../actions/actionCreators';
import { postChannel } from '../api/channels';

export const createChannelThunk = (name: string): any =>
  async (dispatch: Dispatch, getState: () => IState) => {
    const creatorId = getState().currentUser;
    const channel = await postChannel(name, Immutable.Set([creatorId]));

    dispatch(createChannel(channel));
  };
