import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AddChannelButton, IAddChannelButtonProps } from '../components/AddChannelButton';
import { createChannelThunk } from '../thunks/channelCreate';

const mapDispatchToProps = (dispatch: Dispatch): IAddChannelButtonProps => ({
  onChannelAdd: (name: string) => dispatch(createChannelThunk(name))
});

export const AddChannelButtonContainer = connect(undefined, mapDispatchToProps)(AddChannelButton);
