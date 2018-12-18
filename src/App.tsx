import * as React from 'react';
import { Chat } from './components/Chat';

export class App extends React.PureComponent {
  render(): JSX.Element {
    return (
      <>
        <Chat />
      </>
    );
  }
}
