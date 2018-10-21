import * as React from 'react';

import { ChannelToolbar } from './ChannelToolbar';

export class ChannelDetail extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <ChannelToolbar />
        <h2>This is detail</h2>
      </div>
    );
  }
}
