import * as React from 'react';

import { ChannelListContainer } from '../containers/ChannelListContainer';
import { AddChannelButtonContainer } from '../containers/AddChannelButtonContainer';

export class Sidebar extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <ChannelListContainer />
        <AddChannelButtonContainer />
      </div>
    );
  }
}
