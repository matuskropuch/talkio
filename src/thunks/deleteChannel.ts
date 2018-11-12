import { Dispatch } from 'redux';
import * as Immutable from 'immutable';

import { Uuid, IState } from '../common/interfaces';
import { deleteChannel } from '../actions/actionCreators';

export const deleteChannelThunk = (id: Uuid): any =>
  (dispatch: Dispatch, getState: () => IState) => {
    const channel = getState().channels.get(id);
    const messagesToDelete = channel !== undefined ? channel.messages : Immutable.List<Uuid>();

    dispatch(deleteChannel(id, messagesToDelete));
  };
