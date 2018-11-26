import { Dispatch } from 'redux';

import { IState } from '../common/interfaces';
import { createChannel } from '../actions/actionCreators';

export const createChannelThunk = (name: string): any =>
  (dispatch: Dispatch, getState: () => IState) => {
    const creatorId = getState().currentUser;

    dispatch(createChannel(name, creatorId));
  };
