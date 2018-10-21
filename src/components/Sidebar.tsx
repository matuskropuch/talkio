import * as React from 'react';

import { ChannelList } from './ChannelList';
import { AddChannelButton } from './AddChannelButton';

export class Sidebar extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <ChannelList />
        <AddChannelButton />
      </div>
    );
  }
}
