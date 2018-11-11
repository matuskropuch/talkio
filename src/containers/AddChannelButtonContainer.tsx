import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AddChannelButton, IAddChannelButtonProps } from '../components/AddChannelButton';
import { createChannel } from '../actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch): IAddChannelButtonProps => ({
  onChannelAdd: (name: string) => dispatch(createChannel(name))
});

export const AddChannelButtonContainer = connect(undefined, mapDispatchToProps)(AddChannelButton);
