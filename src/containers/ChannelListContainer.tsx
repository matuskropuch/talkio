import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelList, IChannelListStateProps, IChannelListDispatchProps } from '../components/ChannelList';
import { IState, Uuid } from '../common/interfaces';
import { selectChannel } from '../actions/actionCreators';

const mapStateToProps = (state: IState): IChannelListStateProps => ({
  channels: state.channels,
  activeChannel: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelListDispatchProps => ({
  onChannelSelect: (id: Uuid) => dispatch(selectChannel(id))
});

export const ChannelListContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelList);
