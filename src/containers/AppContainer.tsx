import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { App, IAppStateProps, IAppDispatchProps } from '../App';
import { IState } from '../common/interfaces';
import { userLogin } from '../actions/actionCreators';

const mapStateToProps = (state: IState): IAppStateProps => ({
  userIsLoggedIn: state.currentUser !== '' && state.currentUser !== undefined
});

const mapDispatchToProps = (dispatch: Dispatch): IAppDispatchProps => ({
  onUserLogin: () => dispatch(userLogin())
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
