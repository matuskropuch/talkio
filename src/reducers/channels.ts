import * as Immutable from 'immutable';

import { Uuid, IChannel, Action } from '../common/interfaces';

export const channels = (prevState: Immutable.Map<Uuid, IChannel>, action: Action): Immutable.Map<Uuid, IChannel> => {
  (action as any) = {};
  return prevState;
};
