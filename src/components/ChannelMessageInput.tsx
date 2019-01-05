import * as React from 'react';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';

import { Uuid } from '../common/interfaces';

export interface IChannelMessageInputStateProps {
  readonly channelId: Uuid;
}

export interface IChannelMessageInputDispatchProps {
  readonly onMessageSend: (channelId: Uuid, text: ContentState) => void;
}

type IChannelMessageInputProps = IChannelMessageInputStateProps & IChannelMessageInputDispatchProps;

interface IChannelMessageInputLocalState {
  readonly editorState: EditorState;
}

export class ChannelMessageInput extends React.PureComponent<IChannelMessageInputProps, IChannelMessageInputLocalState> {
  editor: Editor;

  constructor(props: IChannelMessageInputProps) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
  }

  componentDidMount() {
    this.editor.focus();
  }

  setEditorRef = (editor: Editor) => this.editor = editor;

  onMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.editorState.getCurrentContent().hasText()) {
      this.props.onMessageSend(this.props.channelId, this.state.editorState.getCurrentContent());
      this.setState(() => ({ editorState: EditorState.createEmpty() }));
    }
  };

  onChange = (editorState: EditorState) => this.setState(() => ({ editorState }));

  onBoldClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onItalicClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  onStrikethroughClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
  }

  render(): JSX.Element {
    return (
      <form action="#" method="post" onSubmit={this.onMessageSubmit}>
        <div className="form-group mx-3">
          <div className="mb-1">
            <button onMouseDown={this.onBoldClick} className="btn btn-outline-secondary" type="button"><b>B</b></button>
            <button onMouseDown={this.onItalicClick} className="btn btn-outline-secondary" type="button"><i>I</i></button>
            <button onMouseDown={this.onStrikethroughClick} className="btn btn-outline-secondary" type="button"><s>S</s></button>
          </div>
          <div className="input-group flex-d">
            <div className="flex-grow-1">
              <div style={{ border: '1px solid grey', borderRadius: '5px 0 0 5px', padding: '6px' }}>
                <Editor
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  ref={this.setEditorRef}
                  />
              </div>
            </div>
            <div className="input-group-append">
              <button className="btn btn-success" type="submit" id="send-button">Send</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
