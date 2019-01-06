import * as React from 'react';

import { IUser } from '../common/interfaces';


export interface IProfileStateProps {
  readonly user: IUser;
}

export interface IProfileDispatchProps {
  readonly updateProfile: (name: string, file: File) => void;
}

type IProfileProps = IProfileStateProps & IProfileDispatchProps;

interface IProfileLocalState {
  readonly name: string;
}

export class Profile extends React.PureComponent<IProfileProps, IProfileLocalState> {
  fileInput: HTMLInputElement;

  constructor(props: IProfileProps) {
    super(props);

    this.state = { name: this.props.user.name };
  }

  setFileInputRef = (fileInput: HTMLInputElement) => this.fileInput = fileInput;

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.fileInput.files !== null && this.fileInput.files[0] !== undefined) {
      this.props.updateProfile(this.state.name, this.fileInput.files[0]);
    }
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newName = event.target.value;

    this.setState(() => ({ name: newName }));
  }

  render() {
    return (
      <div className="row h-100 w-100">
        <div className="my-auto mx-auto w-50">
          <h2 className="display-4">Edit your profile!</h2>
          <img src={this.props.user.avatarUrl} alt="profile picture" />
          <div className="pt-2">
            <form onSubmit={this.onFormSubmit} action="#" method="post">
              <div className="form-group">
                <label htmlFor="pic">Profile picture</label>
                <input
                  ref={this.setFileInputRef}
                  className="form-control-file"
                  type="file"
                  name="pic"
                  id="pic"
                  />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  value={this.state.name}
                  onChange={this.onNameChange}
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  />
              </div>
              <button className="btn btn-primary" type="submit">Update profile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
