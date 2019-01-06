import * as React from 'react';


export class Profile extends React.PureComponent {
  render() {
    return (
      <div className="row h-100 w-100">
        <div className="my-auto mx-auto w-50">
          <h1 className="display-4">Edit your profile!</h1>
          <img src="https://catking.in/wp-content/uploads/2017/02/default-profile-1.png" alt="profile picture" />
          <div className="pt-2">
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="pic">Profile picture</label>
                <input className="form-control-file" type="file" name="pic" id="pic"/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" name="name" id="name"/>
              </div>
              <button className="btn btn-primary" type="submit">Update profile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
