import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MessageVote, IMessageVoteDispatchProps, IMessageVoteStateProps } from '../components/MessageVote';
import { upvoteMessage, downvoteMessage } from '../actions/actionCreators';
import { Uuid, IState } from '../common/interfaces';

const mapStateToProps = (state: IState): IMessageVoteStateProps => ({
  activeChannel: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IMessageVoteDispatchProps => ({
  upvoteMessage: (channelId: Uuid, messageId: Uuid) => dispatch(upvoteMessage(channelId, messageId)),
  downvoteMessage: (channelId: Uuid, messageId: Uuid) => dispatch(downvoteMessage(channelId, messageId))
});

export const MessageVoteContainer = connect(mapStateToProps, mapDispatchToProps)(MessageVote);
