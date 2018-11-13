import * as React from 'react';

import { ChannelToolbarContainer } from '../containers/ChannelToolbarContainer';
import { ChannelMessageListContainer } from '../containers/ChannelMessageListContainer';
import { ChannelMessageInputContainer } from '../containers/ChannelMessageInputContainer';

export class ChannelDetail extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="d-flex flex-column flex-grow-1">
        <div>
          <ChannelToolbarContainer />
        </div>
        <div className="flex-grow-1 d-flex">
          <ChannelMessageListContainer />
        </div>
        <div className="pt-3">
          <ChannelMessageInputContainer />
        </div>
      </div>
    );
  }
}
