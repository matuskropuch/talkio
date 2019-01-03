import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ChannelAddAllowedUser, IChannelAddAllowedUserDispatchProps } from '../components/ChannelAddAllowedUser';
import { channelAddAllowedUserThunk } from '../thunks/channelAddAllowedUser';


const mapDispatchToProps = (dispatch: Dispatch): IChannelAddAllowedUserDispatchProps => ({
  onAllowedUserAdd: (email: string) => dispatch(channelAddAllowedUserThunk(email))
});

export const ChannelAddAllowedUserContainer = connect(undefined, mapDispatchToProps)(ChannelAddAllowedUser);
