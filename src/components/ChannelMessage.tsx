import * as React from 'react';

interface ChannelMessageProps {
  readonly text: string;
}

export class ChannelMessage extends React.PureComponent<ChannelMessageProps, {}> {
  render(): JSX.Element {
    return (
      <div className="card bg-light mx-3 mb-3 flex-shrink-0">
        <div className="card-body d-flex">
          <div className="pr-3">
            <img src="https://placeimg.com/480/480/people" alt="user picture" className="rounded" style={{ height: '48px', width: '48px' }} />
          </div>
          <div className="flex-grow-1 pr-3">
            {this.props.text}
          </div>
          <a href="#">
            <i className="fas fa-ellipsis-v"></i>
          </a>
        </div>
      </div>
    );
  }
}
