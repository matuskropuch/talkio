import * as React from 'react';

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
            <i className="fas fa-user-plus"></i>
          </a>
        </div>
        <a href="#" className="text-danger pr-4 my-auto">
          <i className="fas fa-trash"></i>
        </a>
      </div>
    );
  }
}
