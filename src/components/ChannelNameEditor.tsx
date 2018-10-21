import * as React from 'react';

interface ChannelNameEditorState {
  channelName: string;
  editing: boolean;
}

export class ChannelNameEditor extends React.PureComponent<{}, ChannelNameEditorState> {
  constructor(props: never) {
    super(props);

    this.state = { channelName: 'Channel 1', editing: false };
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    this.setState(() => ({ channelName: newValue }));
  }

  onNameClick = (_: React.MouseEvent<HTMLParagraphElement>): void => {
    this.setState(() => ({ editing: true }));
  }

  onNameSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.setState(() => ({ editing: false }));
  }

  render() {
    let output = null;

    if (this.state.editing) {
      output = (
        <form className="form-inline" action="#" method="post" onSubmit={this.onNameSubmit} >
          <div className="form-group">
            <input type="text" className="form-control" value={this.state.channelName} onChange={this.onNameChange} />
          </div>
        </form>
      );
    } else {
      output = <span onClick={this.onNameClick}>{this.state.channelName}</span>;
    }
    return output;
  }
}
