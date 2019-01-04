import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IChannelAddAllowedUserDispatchProps {
  onAllowedUserAdd: (email: string) => void;
}

type IChannelAddAllowedUserProps = IChannelAddAllowedUserDispatchProps;

interface IChannelAddAllowedUserState {
  editing: boolean;
  email: string;
}

const defaultState = {
  editing: false,
  email: ''
};

export class ChannelAddAllowedUser extends React.PureComponent<IChannelAddAllowedUserProps, IChannelAddAllowedUserState> {
  constructor(props: IChannelAddAllowedUserProps) {
    super(props);

    this.state = defaultState;
  }

  onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;

    this.setState(() => ({ email: newEmail }));
  }

  onEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.email !== '') {
      this.props.onAllowedUserAdd(this.state.email);
    }
    this.setState(() => defaultState);
  }

  onAnchorClick = (_: React.MouseEvent<HTMLAnchorElement>) => {
    this.setState(() => ({ editing: true }));
  }

  render(): JSX.Element {
    if (this.state.editing) {
      return (
        <form className="form-inline mt-2" action="#" method="post" onSubmit={this.onEmailSubmit} >
          <div className="form-group mr-auto">
            <input
              type="text"
              className="form-control form-control-sm"
              value={this.state.email}
              onChange={this.onEmailChange}
              autoFocus />
          </div>
        </form>
      );
    }

    return (
      <a onClick={this.onAnchorClick} href="#">
        <FontAwesomeIcon icon="user-plus" />
      </a>
    );
  }
}
