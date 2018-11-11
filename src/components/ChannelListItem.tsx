import * as React from 'react';

import { Uuid } from '../common/interfaces';

interface IChannelListItemProps {
  readonly name: string;
  readonly isActive: boolean;
  readonly onChannelSelect: (id: string) => void;
  readonly id: Uuid;
}

export class ChannelListItem extends React.PureComponent<IChannelListItemProps, {}> {
  render(): JSX.Element {
    return (
      <a
        href="#"
        className={`list-group-item list-group-item-action ${this.props.isActive ? 'active' : ''}`}
        onClick={() => this.props.onChannelSelect(this.props.id)}
      >
        {this.props.name}
      </a>
    );
  }
}
