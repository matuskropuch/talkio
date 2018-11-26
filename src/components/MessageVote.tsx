import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Uuid } from '../common/interfaces';

interface IMessageVoteOwnProps {
  readonly id: Uuid;
  readonly score: number;
}

export interface IMessageVoteStateProps {
  readonly activeChannel: Uuid;
}

export interface IMessageVoteDispatchProps {
  readonly upvoteMessage: (channelId: Uuid, messageId: Uuid) => void;
  readonly downvoteMessage: (channelId: Uuid, messageId: Uuid) => void;
}

type IMessageVoteProps = IMessageVoteOwnProps & IMessageVoteStateProps & IMessageVoteDispatchProps;

export class MessageVote extends React.PureComponent<IMessageVoteProps, {}> {
  render(): JSX.Element {
    const { activeChannel, id } = this.props;

    return (
      <div className="d-flex flex-column pl-2">
        <a onClick={() => this.props.upvoteMessage(activeChannel, id)} href="#" className="mx-auto">
          <FontAwesomeIcon icon="arrow-up" />
        </a>
        <span>{this.props.score}</span>
        <a onClick={() => this.props.downvoteMessage(activeChannel, id)} href="#" className="mx-auto">
          <FontAwesomeIcon icon="arrow-down" />
        </a>
      </div>
    );
  }
}
