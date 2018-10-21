import * as React from 'react';

export class AddChannelButton extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="text-center">
        <button className="btn btn-outline-primary mt-2">Add channel</button>
      </div>
    );
  }
}
