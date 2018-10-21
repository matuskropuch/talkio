import * as React from 'react';

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ChannelDetail } from './components/ChannelDetail';

export class App extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar />
        <div className="row flex-grow-1 no-gutters">
          <div className="col-2 bg-light" style={{ borderRight: '1px solid rgb(223, 223, 223)' }}>
            <Sidebar />
          </div>
          <div className="col-10">
            <ChannelDetail />
          </div>
        </div>
      </div>
    );
  }
}
