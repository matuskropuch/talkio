import * as React from 'react';
import { ContentState, Editor, EditorState } from 'draft-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MessageVoteContainer } from '../containers/MessageVoteContainer';
import { Uuid } from '../common/interfaces';
import { decorator } from './rich-text-editing/ChannelMessageInput';

interface IChannelMessageProps {
  readonly id: Uuid;
  readonly text: ContentState;
  readonly score: number;
  readonly avatarUrl: string;
  readonly name: string;
  readonly onDelete: (messageId: Uuid) => void;
}

export class ChannelMessage extends React.PureComponent<IChannelMessageProps, {}> {
  render(): JSX.Element {
    return (
      <div className="card bg-light mx-3 mb-3 flex-shrink-0">
        <div className="card-body d-flex">
          <div className="pr-3">
            <img src={this.props.avatarUrl} alt="user picture" className="rounded" style={{ height: '48px', width: '48px' }} />
          </div>
          <div className="flex-grow-1 pr-3">
            <p><b>{this.props.name}</b></p>
            <Editor
              editorState={EditorState.createWithContent(this.props.text, decorator)}
              onChange={() => { return; }}
              readOnly
            />
          </div>
          <a href="#" className="text-danger" onClick={() => this.props.onDelete(this.props.id)}>
            <FontAwesomeIcon icon="eraser" />
          </a>
          <MessageVoteContainer id={this.props.id} score={this.props.score} />
        </div>
      </div>
    );
  }
}
