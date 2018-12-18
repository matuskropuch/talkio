import * as React from 'react';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { ChannelDetail } from './ChannelDetail';

export class Chat extends React.PureComponent {
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar />
        <div className="row flex-grow-1 no-gutters">
          <div className="col-2 bg-light" style={{ borderRight: '1px solid rgb(223, 223, 223)' }}>
            <Sidebar />
          </div>
          <div className="col-10 d-flex">
            <ChannelDetail />
          </div>
        </div>
      </div>
    );
  }
}
