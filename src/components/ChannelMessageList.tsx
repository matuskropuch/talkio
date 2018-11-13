import * as React from 'react';
import * as Immutable from 'immutable';

import { ChannelMessage } from './ChannelMessage';
import { IMessage, Uuid } from '../common/interfaces';

export interface IChannelMessageListProps {
  readonly messages: Immutable.Map<Uuid, IMessage>;
}

export class ChannelMessageList extends React.PureComponent<IChannelMessageListProps, {}> {
  render(): JSX.Element {
    const messages = this.props.messages.toList()
                                        .sort((m1, m2) => m2.timestamp - m1.timestamp)
                                        .map(message => <ChannelMessage text={message.text} key={message.id} />);

    return (
      <div className="flex-grow-1 d-flex flex-column-reverse" style={{ overflow: 'scroll' }}>
        {messages}
      </div>
    );
  }
}
