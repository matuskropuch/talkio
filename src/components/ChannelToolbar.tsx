import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChannelNameEditor } from './ChannelNameEditor';

export class ChannelToolbar extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="d-flex bg-light">
        <div className="p-3">
          <ChannelNameEditor />
        </div>
        <div className="flex-grow-1 pr-4 my-auto">
          <a href="#">
            <FontAwesomeIcon icon="user-plus" />
          </a>
        </div>
        <a href="#" className="text-danger pr-4 my-auto">
          <FontAwesomeIcon icon="trash" />
        </a>
      </div>
    );
  }
}
