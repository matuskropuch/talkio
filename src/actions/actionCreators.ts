import * as uuid from 'uuid';

import { Action, Uuid } from '../common/interfaces';
import { CHANNEL_CREATE, CHANNEL_SELECT } from '../constants/actionTypes';

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
