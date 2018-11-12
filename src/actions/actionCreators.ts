import * as uuid from 'uuid';
import * as Immutable from 'immutable';

import { Action, Uuid } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_SELECT, CHANNEL_DELETE } from '../constants/actionTypes';

export const createChannel = (name: string): Action => ({
  type: CHANNEL_CREATE,
  payload: {
    id: uuid(),
    name
  }
});

export const selectChannel = (id: Uuid): Action => ({
  type: CHANNEL_SELECT,
  payload: {
    id
  }
});

export const deleteChannel = (id: Uuid, messagesToDelete: Immutable.List<Uuid>): Action => ({
  type: CHANNEL_DELETE,
  payload: {
    id,
    messagesToDelete
  }
});
