import * as Immutable from 'immutable';

import { Uuid, IMessage, Action } from '../common/interfaces';

export const messages = (prevState: Immutable.Map<Uuid, IMessage>, action: Action): Immutable.Map<Uuid, IMessage> => {
  (action as any) = {};
  return prevState;
};
