import * as React from 'react';
import * as Immutable from 'immutable';

import { IChannel, Uuid } from '../common/interfaces';
import { ChannelListItem } from './ChannelListItem';

export interface IChannelListDispatchProps {
  readonly onChannelSelect: (id: Uuid) => void;
  readonly onOrderUp: (id: Uuid) => void;
  readonly onOrderDown: (id: Uuid) => void;
}

export interface IChannelListStateProps {
  readonly channels: Immutable.List<IChannel>;
  readonly activeChannel: Uuid;
}

type IChannelListProps = IChannelListStateProps & IChannelListDispatchProps;

export class ChannelList extends React.PureComponent<IChannelListProps, {}> {
  render(): JSX.Element {
    const channels = this.props.channels.map(channel => (
      <ChannelListItem
        name={channel.name}
        isActive={channel.id === this.props.activeChannel}
        key={channel.id}
        id={channel.id}
        onChannelSelect={this.props.onChannelSelect}
        onOrderUp={this.props.onOrderUp}
        onOrderDown={this.props.onOrderDown} />
    ));

    return (
      <div className="h-100 list-group list-group-flush">
        {channels}
      </div>
    );
  }
}
