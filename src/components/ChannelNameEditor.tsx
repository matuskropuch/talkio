import * as React from 'react';
import { Uuid } from '../common/interfaces';

export interface ChannelNameEditorStateProps {
  readonly channelId: Uuid;
  readonly channelName: string;
}

export interface ChannelNameEditorDispatchProps {
  readonly onChannelRename: (id: Uuid, name: string) => void;
}

interface ChannelNameEditorLocalState {
  readonly partialChannelName: string;
  readonly editing: boolean;
}

type ChannelNameEditorProps = ChannelNameEditorStateProps & ChannelNameEditorDispatchProps;

export class ChannelNameEditor extends React.PureComponent<ChannelNameEditorProps, ChannelNameEditorLocalState> {
  constructor(props: ChannelNameEditorProps) {
    super(props);

    this.state = {
      partialChannelName: this.props.channelName,
      editing: false
    };
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    this.setState(() => ({ partialChannelName: newValue }));
  }

  onNameClick = (_: React.MouseEvent<HTMLParagraphElement>): void => {
    this.setState(() => ({ editing: true }));
  }

  onNameSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (this.state.partialChannelName !== '') {
      this.props.onChannelRename(this.props.channelId, this.state.partialChannelName);
    }
    this.setState(() => ({ editing: false }));
  }

  render() {
    if (this.state.editing) {
      return (
        <form className="form-inline" action="#" method="post" onSubmit={this.onNameSubmit} >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm"
              value={this.state.partialChannelName}
              onChange={this.onNameChange}
              autoFocus />
          </div>
        </form>
      );
    }

    return (
      <span onClick={this.onNameClick}>{this.props.channelName}</span>
    );
  }
}
