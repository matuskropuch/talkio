import * as React from 'react';

interface IChannelListItemProps {
  readonly name: string;
  readonly isActive: boolean;
}

export class ChannelListItem extends React.PureComponent<IChannelListItemProps, {}> {
  render(): JSX.Element {
    return (
      <a href="#" className={`list-group-item list-group-item-action ${this.props.isActive ? 'active' : ''}`}>
        {this.props.name}
      </a>
    );
  }
}
