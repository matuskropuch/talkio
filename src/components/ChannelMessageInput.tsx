import * as React from 'react';
import { Uuid } from '../common/interfaces';

export interface IChannelMessageInputStateProps {
  channelId: Uuid;
}

export interface IChannelMessageInputDispatchProps {
  onMessageSend: (channelId: Uuid, text: string) => void;
}

type IChannelMessageInputProps = IChannelMessageInputStateProps & IChannelMessageInputDispatchProps;

interface IChannelMessageInputLocalState {
  text: string;
}

export class ChannelMessageInput extends React.PureComponent<IChannelMessageInputProps, IChannelMessageInputLocalState> {
  constructor(props: IChannelMessageInputProps) {
    super(props);

    this.state = {
      text: ''
    };
  }

  onMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onMessageSend(this.props.channelId, this.state.text);
    this.setState(() => ({ text: '' }));
  };

  onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;

    this.setState(() => ({ text: newText }));
  }

  render(): JSX.Element {
    return (
      <form action="#" method="post" onSubmit={this.onMessageSubmit}>
        <div className="form-group mx-3">
          <div className="input-group">
            <input
              value={this.state.text}
              onChange={this.onTextChange}
              type="text"
              className="form-control"
              placeholder="Tell us what you think about"
              aria-label="Tell us what you think about"
              aria-describedby="send-button" />
            <div className="input-group-append">
              <button className="btn btn-success" type="button" id="send-button">Send</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
