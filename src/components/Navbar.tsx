import * as React from 'react';

import { ProfileButton } from './ProfileButton';

export class Navbar extends React.PureComponent {
  render(): JSX.Element {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Talkio</a>

        <div className="navbar-nav ml-auto">
          <ProfileButton />
        </div>
      </nav>
    );
  }
}
