import { IUser, Action } from '../common/interfaces';

const emptyUser: IUser = {
  id: '',
  name: '',
  avatarUrl: '',
  email: ''
};

export const currentUser = (prevState: IUser = emptyUser, action: Action): IUser => {
  (action as any) = {};
  return prevState;
};
