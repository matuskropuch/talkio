import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import { Dispatch } from 'redux';

import {
  ChannelMessageList,
  IChannelMessageListStateProps,
  IChannelMessageListDispatchProps
} from '../components/ChannelMessageList';
import { IState, Uuid, IMessage } from '../common/interfaces';
import { deleteMessageThunk } from '../thunks/deleteMessage';

const mapStateToProps = (state: IState): IChannelMessageListStateProps => {
  const activeChannel = state.channels.all.get(state.activeChannel);
  let messages = Immutable.Map<Uuid, IMessage>();

  if (activeChannel !== undefined) {
    messages = activeChannel.messages;
  }

  return {
    activeChannel: state.activeChannel,
    messages
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelMessageListDispatchProps => ({
  onMessageDelete: (channelId: Uuid, messageId: Uuid) => dispatch(deleteMessageThunk(channelId, messageId))
});

export const ChannelMessageListContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelMessageList);
