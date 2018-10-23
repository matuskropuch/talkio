import * as React from 'react';

import { ChannelMessage } from './ChannelMessage';

interface Message {
  text: string;
}

interface ChannelMessageListState {
  readonly messages: Message[];
}

export class ChannelMessageList extends React.PureComponent<{}, ChannelMessageListState> {
  constructor(props: never) {
    super(props);

    this.state = {
      messages: [
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man hey yo this is message man ' },
        { text: 'sup dude how you doin' }
      ]
    };
  }

  render(): JSX.Element {
    const messages = this.state.messages.map(message => <ChannelMessage text={message.text} key={Math.random()} />);

    return (
      <div className="flex-grow-1 d-flex flex-column-reverse" style={{ overflow: 'scroll' }}>
        {messages}
      </div>
    );
  }
}
