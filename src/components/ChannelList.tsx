import * as React from 'react';
import * as Immutable from 'immutable';

import { IChannel, Uuid } from '../common/interfaces';
import { ChannelListItem } from './ChannelListItem';

export interface IChannelListDispatchProps {
  readonly onChannelSelect: (id: Uuid) => void;
}

export interface IChannelListStateProps {
  readonly channels: Immutable.Map<Uuid, IChannel>;
  readonly activeChannel: Uuid;
}

type IChannelListProps = IChannelListStateProps & IChannelListDispatchProps;

export class ChannelList extends React.PureComponent<IChannelListProps, {}> {
  render(): JSX.Element {
    const channels = this.props.channels.toList().map(channel => (
      <ChannelListItem
        name={channel.name}
        isActive={channel.id === this.props.activeChannel}
        key={channel.id}
        id={channel.id}
        onChannelSelect={this.props.onChannelSelect} />
    ));

    return (
      <div className="h-100 list-group list-group-flush">
        {channels}
      </div>
    );
  }
}
