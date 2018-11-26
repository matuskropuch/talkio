import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MessageVoteContainer } from '../containers/MessageVoteContainer';
import { Uuid } from '../common/interfaces';

interface ChannelMessageProps {
  readonly id: Uuid;
  readonly text: string;
  readonly score: number;
}

export class ChannelMessage extends React.PureComponent<ChannelMessageProps, {}> {
  render(): JSX.Element {
    return (
      <div className="card bg-light mx-3 mb-3 flex-shrink-0">
        <div className="card-body d-flex">
          <div className="pr-3">
            <img src="https://placeimg.com/480/480/people" alt="user picture" className="rounded" style={{ height: '48px', width: '48px' }} />
          </div>
          <div className="flex-grow-1 pr-3">
            {this.props.text}
          </div>
          <a href="#">
            <FontAwesomeIcon icon="ellipsis-v" />
          </a>
          <MessageVoteContainer id={this.props.id} score={this.props.score} />
        </div>
      </div>
    );
  }
}
