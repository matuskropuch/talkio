import { Dispatch } from 'redux';
import axios from 'axios';
import * as Immutable from 'immutable';

import { userLogin } from '../actions/actionCreators';
import { registerUser, getUsers } from '../api/users';
import { auth } from '../api/auth';
import { Uuid, IUser, Action } from '../common/interfaces';
import { USERS_LOAD } from '../constants/actionTypes';
import { loadChannelsThunk } from './loadChannels';

const loadUsers = (users: Immutable.Map<Uuid, IUser>): Action => ({
  type: USERS_LOAD,
  payload: {
    users
  }
});

export const userRegisterThunk = (email: string, name: string): any =>
  async (dispatch: Dispatch) => {
    const user = await registerUser(
      email,
      name,
      'https://catking.in/wp-content/uploads/2017/02/default-profile-1.png',
      Immutable.List<Uuid>()
    );

    const token = await auth(user.email);
    axios.defaults.headers.Authorization = `bearer ${token}`;

    dispatch(userLogin(user.email));

    const users = await getUsers();
    dispatch(loadUsers(users));
    dispatch(loadChannelsThunk());
  };

export const userLoginThunk = (email: string): any =>
  async (dispatch: Dispatch) => {
    const token = await auth(email);
    axios.defaults.headers.Authorization = `bearer ${token}`;

    dispatch(userLogin(email));

    const users = await getUsers();
    dispatch(loadUsers(users));
    dispatch(loadChannelsThunk());
  };
