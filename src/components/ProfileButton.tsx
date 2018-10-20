import * as React from 'react';

export class ProfileButton extends React.PureComponent {
  render() {
    return (
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user fa-sm" title="User settings"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </div>
    );
  }
}
