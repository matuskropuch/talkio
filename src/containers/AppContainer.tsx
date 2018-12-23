import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { App, IAppStateProps, IAppDispatchProps } from '../App';
import { IState } from '../common/interfaces';
import { userLoginThunk } from '../thunks/userLogin';

const mapStateToProps = (state: IState): IAppStateProps => ({
  userIsLoggedIn: state.currentUser !== '' && state.currentUser !== undefined
});

const mapDispatchToProps = (dispatch: Dispatch): IAppDispatchProps => ({
  onUserLogin: (email: string) => dispatch(userLoginThunk(email))
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
