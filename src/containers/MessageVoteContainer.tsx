import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MessageVote, IMessageVoteDispatchProps, IMessageVoteStateProps } from '../components/MessageVote';
import { Uuid, IState } from '../common/interfaces';
import { upvoteMessageThunk } from '../thunks/upvoteMessage';
import { downvoteMessageThunk } from '../thunks/downvoteMessage';

const mapStateToProps = (state: IState): IMessageVoteStateProps => ({
  activeChannel: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IMessageVoteDispatchProps => ({
  upvoteMessage: (channelId: Uuid, messageId: Uuid) => dispatch(upvoteMessageThunk(channelId, messageId)),
  downvoteMessage: (channelId: Uuid, messageId: Uuid) => dispatch(downvoteMessageThunk(channelId, messageId))
});

export const MessageVoteContainer = connect(mapStateToProps, mapDispatchToProps)(MessageVote);
