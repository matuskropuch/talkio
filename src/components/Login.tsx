import * as React from 'react';

interface ILoginProps {
  readonly onUserLogin: () => void;
}

export class Login extends React.PureComponent<ILoginProps, {}> {
  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row h-100 w-100">
        <div className="jumbotron my-auto mx-auto w-50">
          <h1 className="display-4">Welcome to Talkio!</h1>
          <form onSubmit={this.onFormSubmit} action="#" method="post">
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input className="form-control" type="email" name="emailInput" id="emailInput"/>
            </div>
            <button className="btn btn-primary" onClick={() => this.props.onUserLogin()} type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}
