import { connect } from 'react-redux';
import * as Immutable from 'immutable';

import { ChannelMessageList, IChannelMessageListProps } from '../components/ChannelMessageList';
import { IState, Uuid, IMessage } from '../common/interfaces';

const mapStateToProps = (state: IState): IChannelMessageListProps => {
  const activeChannel = state.channels.get(state.activeChannel);

  if (activeChannel === undefined) {
    return {
      messages: Immutable.Map<Uuid, IMessage>()
    };
  }

  return {
    messages: state.messages.filter(message => activeChannel.messages.contains(message.id))
  };
};

export const ChannelMessageListContainer = connect(mapStateToProps)(ChannelMessageList);
