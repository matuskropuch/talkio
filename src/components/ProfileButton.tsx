import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IProfileButtonDispatchProps {
  onProfileOpen: () => void;
  onLogout: () => void;
}

export class ProfileButton extends React.PureComponent<IProfileButtonDispatchProps, {}> {
  render(): JSX.Element {
    return (
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <FontAwesomeIcon icon="user" />
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a onClick={this.props.onProfileOpen} className="dropdown-item" href="#">Profile</a>
          <a onClick={this.props.onLogout} className="dropdown-item" href="#">Logout</a>
        </div>
      </div>
    );
  }
}
