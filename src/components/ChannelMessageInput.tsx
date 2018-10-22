import * as React from 'react';

export class ChannelMessageInput extends React.PureComponent {
  render(): JSX.Element {
    return (
      <form action="#" method="post">
        <div className="form-group mx-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Tell us what you think about" aria-label="Tell us what you think about" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-success" type="button" id="button-addon2">Send</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
