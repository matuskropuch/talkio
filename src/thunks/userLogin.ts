import { Dispatch } from 'redux';
import axios from 'axios';

import { userLogin } from '../actions/actionCreators';
import { registerUser } from '../api/users';
import { auth } from '../api/auth';

export const userLoginThunk = (email: string): any =>
  async (dispatch: Dispatch) => {
    const user = await registerUser(email, 'Test Guy', 'https://catking.in/wp-content/uploads/2017/02/default-profile-1.png');
    const token = await auth(user.email);

    axios.defaults.headers.Authorization = `bearer ${token}`;

    dispatch(userLogin(user.email));
  };
