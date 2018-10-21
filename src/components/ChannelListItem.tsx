import * as React from 'react';

interface ChannelListItemProps {
  name: string;
  isActive: boolean;
}

export class ChannelListItem extends React.PureComponent<ChannelListItemProps, {}> {
  render(): JSX.Element {
    return (
      <a href="#" className={`list-group-item list-group-item-action ${this.props.isActive ? 'active' : ''}`}>
        <span>{this.props.name}</span>
      </a>
    );
  }
}
