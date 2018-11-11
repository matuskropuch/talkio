import * as React from 'react';
import * as Immutable from 'immutable';

import { IChannel, Uuid } from '../common/interfaces';
import { ChannelListItem } from './ChannelListItem';

export interface IChannelListProps {
  readonly channels: Immutable.Map<Uuid, IChannel>;
}

export class ChannelList extends React.PureComponent<IChannelListProps, {}> {

  render(): JSX.Element {
    const channels = this.props.channels.toList().map(channel => (
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
