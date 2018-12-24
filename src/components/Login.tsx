import * as React from 'react';

enum Tab {
  Login,
  Register
}

interface ILoginProps {
  readonly onUserLogin: (email: string) => void;
  readonly onUserRegister: (email: string, name: string) => void;
}

interface ILoginState {
  readonly email: string;
  readonly name: string;
  readonly selectedTab: Tab;
}

export class Login extends React.PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      email: '',
      name: '',
      selectedTab: Tab.Login
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

  onNameEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    this.setState(() => ({
      name: value
    }));
  }

  changeTab = () => {
    let updatedState: object;

    if (this.state.selectedTab === Tab.Login) {
      updatedState = { selectedTab: Tab.Register };
    } else {
      updatedState = { selectedTab: Tab.Login };
    }

    this.setState(() => updatedState);
  }

  render() {
    const loginForm = (
      <form onSubmit={this.onFormSubmit} action="#" method="post">
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input
            onChange={this.onEmailEdit}
            value={this.state.email}
            className="form-control"
            type="email"
            name="emailInput"
            id="emailInput" />
        </div>
        <button onClick={() => this.props.onUserLogin(this.state.email)} className="btn btn-primary" type="submit">
          Log In
        </button>
      </form>
    );

    const registerForm = (
      <form onSubmit={this.onFormSubmit} action="#" method="post">
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input
            onChange={this.onEmailEdit}
            value={this.state.email}
            className="form-control"
            type="email"
            name="emailInput"
            id="emailInput" />
        </div>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            onChange={this.onNameEdit}
            value={this.state.name}
            className="form-control"
            type="text"
            name="nameInput"
            id="nameInput" />
        </div>
        <button onClick={() => this.props.onUserRegister(this.state.email, this.state.name)} className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    );

    return (
      <div className="row h-100 w-100">
        <div className="jumbotron my-auto mx-auto w-50">
          <h1 className="display-4">Welcome to Talkio!</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a onClick={this.changeTab} href="#" className={`nav-link ${this.state.selectedTab === Tab.Login ? 'active' : ''}`}>Login</a>
            </li>
            <li className="nav-i">
              <a onClick={this.changeTab} href="#" className={`nav-link ${this.state.selectedTab === Tab.Register ? 'active' : ''}`}>Register</a>
            </li>
          </ul>
          <div className="pt-2">
            {this.state.selectedTab === Tab.Login ? loginForm : registerForm}
          </div>
        </div>
      </div>
    );
  }
}
