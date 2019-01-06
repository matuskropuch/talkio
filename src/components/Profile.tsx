import * as React from 'react';

import { IUser } from '../common/interfaces';


export interface IProfileProps {
  readonly user: IUser;
}

export class Profile extends React.PureComponent<IProfileProps, {}> {
  render() {
    return (
      <div className="row h-100 w-100">
        <div className="my-auto mx-auto w-50">
          <h1 className="display-4">Edit your profile!</h1>
          <img src={this.props.user.avatarUrl} alt="profile picture" />
          <div className="pt-2">
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="pic">Profile picture</label>
                <input className="form-control-file" type="file" name="pic" id="pic"/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={this.props.user.name} className="form-control" type="text" name="name" id="name"/>
              </div>
              <button className="btn btn-primary" type="submit">Update profile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
