import * as React from 'react';

import { Chat } from './components/Chat';
import { Login } from './components/Login';

export interface IAppStateProps {
  readonly userIsLoggedIn: boolean;
}

export interface IAppDispatchProps {
  readonly onUserLogin: (email: string) => void;
  readonly onUserRegister: (email: string, name: string) => void;
}

type IAppProps = IAppStateProps & IAppDispatchProps;

export class App extends React.PureComponent<IAppProps, {}> {
  render(): JSX.Element {
    if (this.props.userIsLoggedIn) {
      return <Chat />;
    }
    return <Login onUserLogin={this.props.onUserLogin} onUserRegister={this.props.onUserRegister}/>;
  }
}
