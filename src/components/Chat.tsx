import * as React from 'react';

import { Navbar } from './Navbar';
import { BodyContainer } from '../containers/BodyContainer';

export class Chat extends React.PureComponent {
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar />
        <BodyContainer />
      </div>
    );
  }
}
