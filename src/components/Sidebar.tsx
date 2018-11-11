import * as React from 'react';

import { ChannelListContainer } from '../containers/ChannelListContainer';
import { AddChannelButton } from './AddChannelButton';

export class Sidebar extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <ChannelListContainer />
        <AddChannelButton />
      </div>
    );
  }
}
