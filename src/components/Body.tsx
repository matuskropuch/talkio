import * as React from 'react';

import { Sidebar } from './Sidebar';
import { ChannelDetail } from './ChannelDetail';
import { ProfileContainer } from '../containers/ProfileContainer';

export interface IBodyStateProps {
  isProfileOpen: boolean;
}

export class Body extends React.PureComponent<IBodyStateProps, {}> {
  render() {
    if (this.props.isProfileOpen) {
      return <ProfileContainer />;
    }

    return (
      <div className="row flex-grow-1 no-gutters">
        <div className="col-2 bg-light" style={{ borderRight: '1px solid rgb(223, 223, 223)' }}>
          <Sidebar />
        </div>
        <div className="col-10 d-flex">
          <ChannelDetail />
        </div>
      </div>
    );
  }
}
