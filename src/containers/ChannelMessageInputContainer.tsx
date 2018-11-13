import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelMessageInput, IChannelMessageInputStateProps, IChannelMessageInputDispatchProps } from '../components/ChannelMessageInput';
import { IState, Uuid } from '../common/interfaces';
import { sendMessage } from '../actions/actionCreators';

const mapStateToProps = (state: IState): IChannelMessageInputStateProps => ({
  channelId: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelMessageInputDispatchProps => ({
  onMessageSend: (channelId: Uuid, text: string) => dispatch(sendMessage(channelId, text))
});

export const ChannelMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelMessageInput);
