import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelToolbar, IChannelToolbarDispatchProps, IChannelToolbarStateProps } from '../components/ChannelToolbar';
import { IState } from '../common/interfaces';
import { deleteChannelThunk } from '../thunks/deleteChannel';

const mapStateToProps = (state: IState): IChannelToolbarStateProps => ({
  channelId: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelToolbarDispatchProps => ({
  onChannelDelete: (id: string) => dispatch(deleteChannelThunk(id))
});

export const ChannelToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelToolbar);
