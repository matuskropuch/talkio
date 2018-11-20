import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChannelNameEditorContainer } from '../containers/ChannelNameEditorContainer';
import { Uuid } from '../common/interfaces';

export interface IChannelToolbarDispatchProps {
  readonly onChannelDelete: (id: Uuid) => void;
}

export interface IChannelToolbarStateProps {
  readonly channelId: Uuid;
}

type IChannelToolbarProps = IChannelToolbarDispatchProps & IChannelToolbarStateProps;

export class ChannelToolbar extends React.PureComponent<IChannelToolbarProps, {}> {
  render(): JSX.Element {
    return (
      <div className="d-flex bg-light">
        <div className="p-3">
          <ChannelNameEditorContainer />
        </div>
        <div className="flex-grow-1 pr-4 my-auto">
          <a href="#">
            <FontAwesomeIcon icon="user-plus" />
          </a>
        </div>
        <a href="#" className="text-danger pr-4 my-auto" onClick={() => this.props.onChannelDelete(this.props.channelId)}>
          <FontAwesomeIcon icon="trash" />
        </a>
      </div>
    );
  }
}
