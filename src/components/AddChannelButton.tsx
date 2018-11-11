import * as React from 'react';

export interface IAddChannelButtonProps {
  readonly onChannelAdd: (name: string) => void;
}

interface IAddChannelButtonState {
  readonly editing: boolean;
  readonly channelName: string;
}

const defaultState = {
  editing: false,
  channelName: ''
};

export class AddChannelButton extends React.PureComponent<IAddChannelButtonProps, IAddChannelButtonState> {
  constructor(props: IAddChannelButtonProps) {
    super(props);

    this.state = defaultState;
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    this.setState(() => ({ channelName: newName }));
  }

  onChannelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState(() => defaultState);

    this.props.onChannelAdd(this.state.channelName);
  }

  onButtonClick = (_: React.MouseEvent<HTMLButtonElement>) => {
    this.setState(() => ({ editing: true }));
  }

  render(): JSX.Element {
    if (this.state.editing) {
      return (
        <form className="form-inline mt-2" action="#" method="post" onSubmit={this.onChannelSubmit} >
          <div className="form-group mx-auto">
            <input
              type="text"
              className="form-control form-control-sm"
              value={this.state.channelName}
              onChange={this.onNameChange}
              autoFocus />
          </div>
        </form>
      );
    }

    return (
      <div className="text-center">
        <button className="btn btn-outline-primary mt-2" onClick={this.onButtonClick}>Add channel</button>
      </div>
    );
  }
}
