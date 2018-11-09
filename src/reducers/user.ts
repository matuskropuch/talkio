import { IUser, Action } from '../common/interfaces';

export const user = (prevState: IUser, action: Action): IUser => {
  (action as any) = {};
  return prevState;
};
