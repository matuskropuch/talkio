import * as React from 'react';
import * as Immutable from 'immutable';

import { ChannelMessage } from './ChannelMessage';
import { IMessage, Uuid } from '../common/interfaces';

export interface IChannelMessageListStateProps {
  readonly activeChannel: Uuid;
  readonly messages: Immutable.Map<Uuid, IMessage>;
}

export interface IChannelMessageListDispatchProps {
  readonly onMessageDelete: (channelId: Uuid, messageId: Uuid) => void;
}

type IChannelMessageListProps = IChannelMessageListStateProps & IChannelMessageListDispatchProps;

export class ChannelMessageList extends React.PureComponent<IChannelMessageListProps, {}> {
  onDelete = (messageId: Uuid) => {
    this.props.onMessageDelete(this.props.activeChannel, messageId);
  };

  render(): JSX.Element {
    const messages = this.props.messages
      .toList()
      .map(message => (
        <ChannelMessage
          id={message.id}
          text={message.text}
          score={message.score}
          key={message.id}
          onDelete={this.onDelete} />
        )
      );

    return (
      <div className="flex-grow-1 d-flex flex-column-reverse" style={{ overflow: 'scroll' }}>
        {messages}
      </div>
    );
  }
}
