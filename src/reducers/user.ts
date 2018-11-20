import { IUser, Action } from '../common/interfaces';

const emptyUser: IUser = {
  name: '',
  avatarUrl: '',
  email: ''
};

export const user = (prevState: IUser = emptyUser, action: Action): IUser => {
  (action as any) = {};
  return prevState;
};
