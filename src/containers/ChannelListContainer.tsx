import { connect } from 'react-redux';

import { ChannelList, IChannelListProps } from '../components/ChannelList';
import { IState } from '../common/interfaces';

const mapStateToProps = (state: IState): IChannelListProps => ({
  channels: state.channels
});

export const ChannelListContainer = connect(mapStateToProps)(ChannelList);
