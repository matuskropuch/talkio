import * as React from 'react';
import { ContentState } from 'draft-js';

interface LinkProps {
  contentState: ContentState;
  entityKey: string;
}

export class Link extends React.PureComponent<LinkProps, {}> {
  render() {
    const { url } = this.props.contentState.getEntity(this.props.entityKey).getData();
    return (
      <a href={url} style={{ textDecoration: 'underline' }} target="_blank">
        {this.props.children}
      </a>
    );
  }
}
