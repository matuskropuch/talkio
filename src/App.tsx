import * as React from 'react';

import { Navbar } from './components/Navbar';
import { ChannelList } from './components/ChannelList';
import { ChannelDetail } from './components/ChannelDetail';

export class App extends React.PureComponent {
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar />
        <div className="row flex-grow-1">
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
