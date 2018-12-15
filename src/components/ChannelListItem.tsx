import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="d-flex flex-row">
          <div className="flex-grow-1">
            {this.props.name}
          </div>
          <div className="px-2" onClick={() => console.log('ahaha')}>
            <FontAwesomeIcon icon="arrow-up" />
          </div>
          <div onClick={() => console.log('ahaha')}>
            <FontAwesomeIcon icon="arrow-down" />
          </div>
        </div>
      </a>
    );
  }
}
