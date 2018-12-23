import * as React from 'react';

interface ILoginProps {
  readonly onUserLogin: (email: string) => void;
}

interface ILoginState {
  readonly email: string;
}

export class Login extends React.PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      email: ''
    };
  }

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  onEmailEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    this.setState(() => ({
      email: value
    }));
  }

  render() {
    return (
      <div className="row h-100 w-100">
        <div className="jumbotron my-auto mx-auto w-50">
          <h1 className="display-4">Welcome to Talkio!</h1>
          <form onSubmit={this.onFormSubmit} action="#" method="post">
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                onChange={this.onEmailEdit}
                value={this.state.email}
                className="form-control"
                type="email"
                name="emailInput"
                id="emailInput"/>
            </div>
            <button className="btn btn-primary" onClick={() => this.props.onUserLogin(this.state.email)} type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}
