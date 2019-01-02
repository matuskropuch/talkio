import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelList, IChannelListStateProps, IChannelListDispatchProps } from '../components/ChannelList';
import { IState, Uuid, IChannel } from '../common/interfaces';
import { channelOrderDownThunk } from '../thunks/channelOrderDown';
import { channelOrderUpThunk } from '../thunks/channelOrderUp';
import { selectChannelThunk } from '../thunks/selectChannel';

const orderChannels = (channels: Immutable.Map<Uuid, IChannel>, sortedIds: Immutable.List<Uuid>): Immutable.List<IChannel> =>
  channels.toList().sort((valA: IChannel, valB: IChannel) => sortedIds.indexOf(valA.id) - sortedIds.indexOf(valB.id));

const mapStateToProps = (state: IState): IChannelListStateProps => {
  const { channels, currentUser } = state;
  const filteredChannels = channels.all.filter(channel => channel.allowedUsers.contains(currentUser));

  return {
    channels: orderChannels(filteredChannels, state.channels.byId),
    activeChannel: state.activeChannel
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelListDispatchProps => ({
  onChannelSelect: (id: Uuid) => dispatch(selectChannelThunk(id)),
  onOrderUp: (id: Uuid) => dispatch(channelOrderUpThunk(id)),
  onOrderDown: (id: Uuid) => dispatch(channelOrderDownThunk(id))
});

export const ChannelListContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelList);
