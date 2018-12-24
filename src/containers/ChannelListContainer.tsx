import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelList, IChannelListStateProps, IChannelListDispatchProps } from '../components/ChannelList';
import { IState, Uuid, IChannel } from '../common/interfaces';
import { selectChannel, channelOrderUp, channelOrderDown } from '../actions/actionCreators';
import { loadChannelsThunk } from '../thunks/loadChannels';

const orderChannels = (channels: Immutable.Map<Uuid, IChannel>, sortedIds: Immutable.List<Uuid>): Immutable.List<IChannel> =>
  channels.toList().sort((valA: IChannel, valB: IChannel) => sortedIds.indexOf(valA.id) - sortedIds.indexOf(valB.id));

const mapStateToProps = (state: IState): IChannelListStateProps => ({
  channels: orderChannels(state.channels.all, state.channels.byId),
  activeChannel: state.activeChannel
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelListDispatchProps => ({
  onChannelSelect: (id: Uuid) => dispatch(selectChannel(id)),
  onOrderUp: (id: Uuid) => dispatch(channelOrderUp(id)),
  onOrderDown: (id: Uuid) => dispatch(channelOrderDown(id)),
  loadChannels: () => dispatch(loadChannelsThunk())
});

export const ChannelListContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelList);
