import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ChannelAddAllowedUser, IChannelAddAllowedUserDispatchProps } from '../components/ChannelAddAllowedUser';


const mapDispatchToProps = (_dispatch: Dispatch): IChannelAddAllowedUserDispatchProps => ({
  onAllowedUserAdd: (_email: string) => ({})
});

export const ChannelAddAllowedUserContainer = connect(undefined, mapDispatchToProps)(ChannelAddAllowedUser);
