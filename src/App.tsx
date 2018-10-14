import * as React from 'react';

import { Navbar } from './components/Navbar';
import { ChannelList } from './components/ChannelList';
import { ChannelDetail } from './components/ChannelDetail';

export class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Navbar />
        <ChannelList />
        <ChannelDetail />
      </div>
    );
  }
}
