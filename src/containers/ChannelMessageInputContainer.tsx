import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelMessageInput, IChannelMessageInputStateProps, IChannelMessageInputDispatchProps } from '../components/ChannelMessageInput';
import { IState, Uuid } from '../common/interfaces';
import { sendMessageThunk } from '../thunks/sendMessage';

const mapStateToProps = (state: IState): IChannelMessageInputStateProps => ({
  channelId: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelMessageInputDispatchProps => ({
  onMessageSend: (channelId: Uuid, text: string) => dispatch(sendMessageThunk(channelId, text))
});

export const ChannelMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelMessageInput);
