import * as React from 'react';

export class Mention extends React.PureComponent {
  render() {
    return (
      <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{this.props.children}</span>
    );
  }
}
