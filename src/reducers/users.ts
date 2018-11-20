import * as Immutable from 'immutable';
import { Uuid, IUser, Action } from '../common/interfaces';

export const users = (prevState: Immutable.Map<Uuid, IUser> = Immutable.Map(), action: Action): Immutable.Map<Uuid, IUser> => {
  (action as any) = {};
  return prevState;
};
