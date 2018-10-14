import * as React from 'react';

import { Navbar } from './components/Navbar';
import { ChannelList } from './components/ChannelList';
import { ChannelDetail } from './components/ChannelDetail';

export class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-3">
            <ChannelList />
          </div>
          <div className="col-9">
            <ChannelDetail />
          </div>
        </div>
      </div>
    );
  }
}
