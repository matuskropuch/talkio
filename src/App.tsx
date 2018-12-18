import * as React from 'react';

import { Chat } from './components/Chat';
import { Login } from './components/Login';

interface IAppState {
  readonly userIsLoggedIn: boolean;
}

export class App extends React.PureComponent<{}, IAppState> {
  constructor(props: never) {
    super(props);

    this.state = {
      userIsLoggedIn: false
    };
  }

  onUserLogin = () => {
    this.setState(() => ({
      userIsLoggedIn: true
    }));
  }

  render(): JSX.Element {
    if (this.state.userIsLoggedIn) {
      return <Chat />;
    }
    return <Login onUserLogin={this.onUserLogin} />;
  }
}
