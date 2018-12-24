import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ChannelNameEditor, ChannelNameEditorStateProps, ChannelNameEditorDispatchProps } from '../components/ChannelNameEditor';
import { IState, Uuid } from '../common/interfaces';
import { renameChannelThunk } from '../thunks/renameChannel';

const mapStateToProps = (state: IState): ChannelNameEditorStateProps => {
  const activeChannel = state.channels.all.get(state.activeChannel);

  return {
    channelId: state.activeChannel,
    channelName: activeChannel === undefined ? '' : activeChannel.name
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ChannelNameEditorDispatchProps => ({
  onChannelRename: (id: Uuid, name: string) => dispatch(renameChannelThunk(id, name))
});

export const ChannelNameEditorContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelNameEditor);
