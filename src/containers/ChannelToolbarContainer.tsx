import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelToolbar, IChannelToolbarDispatchProps, IChannelToolbarStateProps } from '../components/ChannelToolbar';
import { IState } from '../common/interfaces';
import { deleteChannel } from '../actions/actionCreators';

const mapStateToProps = (state: IState): IChannelToolbarStateProps => ({
  channelId: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelToolbarDispatchProps => ({
  onChannelDelete: (id: string) => dispatch(deleteChannel(id))
});

export const ChannelToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelToolbar);
