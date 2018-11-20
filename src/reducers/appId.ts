import { Uuid, Action } from '../common/interfaces';

export const appId = (prevState: Uuid = '', action: Action): Uuid => {
  (action as any) = {};
  return prevState;
};
