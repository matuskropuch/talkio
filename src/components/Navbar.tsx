import * as React from 'react';

import { ProfileButtonContainer } from '../containers/ProfileButtonContainer';

export class Navbar extends React.PureComponent {
  render(): JSX.Element {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark flex-shrink-0">
        <a className="navbar-brand" href="#">Talkio</a>

        <div className="navbar-nav ml-auto">
          <ProfileButtonContainer />
        </div>
      </nav>
    );
  }
}
