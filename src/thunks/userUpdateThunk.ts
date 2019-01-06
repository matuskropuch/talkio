import { Dispatch } from 'redux';

import { updateUser } from '../api/users';
import { uploadFile } from '../api/files';
import { IState } from '../common/interfaces';
import { userUpdate, closeProfile } from '../actions/actionCreators';


export const userUpdateThunk = (name: string, file: File): any =>
  async (dispatch: Dispatch, getState: () => IState) => {
    const { currentUser, users } = getState();

    const oldUser = users.get(currentUser);
    if (oldUser === undefined) {
      throw new Error('Updating nonexisting user');
    }

    const avatarUrl = await uploadFile(file);

    const newUser = await updateUser({
      ...oldUser,
      name,
      avatarUrl
    });

    dispatch(userUpdate(newUser));
    dispatch(closeProfile());
  };
