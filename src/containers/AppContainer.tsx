import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { App, IAppStateProps, IAppDispatchProps } from '../App';
import { IState } from '../common/interfaces';
import { userLoginThunk, userRegisterThunk } from '../thunks/userLogin';

const mapStateToProps = (state: IState): IAppStateProps => ({
  userIsLoggedIn: state.currentUser !== '' && state.currentUser !== undefined
});

const mapDispatchToProps = (dispatch: Dispatch): IAppDispatchProps => ({
  onUserLogin: (email: string) => dispatch(userLoginThunk(email)),
  onUserRegister: (email: string, name: string) => dispatch(userRegisterThunk(email, name))
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
