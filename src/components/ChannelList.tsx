import * as React from 'react';

import { ChannelListItem } from './ChannelListItem';

interface Channel {
  readonly name: string;
  readonly isActive: boolean;
}

interface ChannelListState {
  readonly channels: Channel[];
}

export class ChannelList extends React.PureComponent<{}, ChannelListState> {
  constructor(props: never) {
    super(props);

    this.state = {
      channels: [
        { name: 'Channel 1', isActive: true},
        { name: 'Channel 2', isActive: false }
      ]
    };
  }

  render(): JSX.Element {
    const channels = this.state.channels.map(channel => (
      <ChannelListItem
        name={channel.name}
        isActive={channel.isActive}
        key={Math.random()} />
    ));

    return (
      <div className="h-100 list-group list-group-flush">
        {channels}
      </div>
    );
  }
}
