import * as React from 'react';
import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  KeyBindingUtil,
  getDefaultKeyBinding,
  CompositeDecorator,
  ContentBlock
} from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Uuid } from '../../common/interfaces';
import { Link } from './Link';
import { Mention } from './Mention';

export interface IChannelMessageInputStateProps {
  readonly channelId: Uuid;
}

export interface IChannelMessageInputDispatchProps {
  readonly onMessageSend: (channelId: Uuid, text: ContentState) => void;
}

type IChannelMessageInputProps = IChannelMessageInputStateProps & IChannelMessageInputDispatchProps;

interface IChannelMessageInputLocalState {
  readonly editorState: EditorState;
  readonly showURLInput: boolean;
  readonly urlValue: string;
}

export const findLinkEntities = (contentBlock: ContentBlock, callback: any, contentState: ContentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
};

const findWithRegex = (regex: RegExp, contentBlock: ContentBlock, callback: (start: number, end: number) => void) => {
  const text = contentBlock.getText();
  let matchArr, start;
  // tslint:disable-next-line
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
};

export const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
  {
    strategy: (contentBlock, callback) => {
      findWithRegex(/@[a-zA-Z0-9\.]+/g, contentBlock, callback);
    },
    component: Mention
  }
]);

export class ChannelMessageInput extends React.PureComponent<IChannelMessageInputProps, IChannelMessageInputLocalState> {
  editor: Editor;
  urlInput: HTMLInputElement;

  constructor(props: IChannelMessageInputProps) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(decorator),
      showURLInput: false,
      urlValue: ''
    };
  }

  componentDidMount() {
    this.editor.focus();
  }

  setEditorRef = (editor: Editor) => this.editor = editor;
  setUrlRef = (urlInput: HTMLInputElement) => this.urlInput = urlInput;

  onMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.editorState.getCurrentContent().hasText()) {
      this.props.onMessageSend(this.props.channelId, this.state.editorState.getCurrentContent());
      this.setState(() => ({ editorState: EditorState.createEmpty() }));
    }
  };

  keyBindingFn = (event: React.KeyboardEvent) => {
    if (KeyBindingUtil.hasCommandModifier(event) && event.keyCode === 83) {
      return 'strikethrough';
    }

    return getDefaultKeyBinding(event);
  }

  handleKeyCommand = (command: string) => {
    let newState;
    if (command === 'bold') {
      newState = RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD');
    }
    if (command === 'italic') {
      newState = RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC');
    }
    if (command === 'strikethrough') {
      newState = RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH');
    }

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

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

  promptForLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

      let url = '';
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }

      this.setState(() => ({
        showURLInput: true,
        urlValue: url,
      }), () => {
        setTimeout(() => this.urlInput.focus(), 0);
      });
    }
  }

  onURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    this.setState(() => ({ urlValue: newUrl }));
  }

  confirmLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { editorState, urlValue } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url: urlValue.indexOf('http') !== -1 || urlValue.indexOf('https') !== -1 ? urlValue : `https:\\\\${urlValue}` }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
    this.setState(() => ({
      editorState: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      ),
      showURLInput: false,
      urlValue: '',
    }), () => {
      setTimeout(() => this.editor.focus(), 0);
    });
  }

  render(): JSX.Element {
    let urlInput = (
      <button onMouseDown={this.promptForLink} className="btn btn-outline-secondary" type="button">
        <FontAwesomeIcon icon="link" />
      </button>
    );
    if (this.state.showURLInput) {
      urlInput = (
        <div className="form-inline" style={{ display: 'inline' }}>
          <input
            onChange={this.onURLChange}
            type="text"
            value={this.state.urlValue}
            ref={this.setUrlRef}
            className="form-control"
            placeholder="Enter URL"
          />
          <button onMouseDown={this.confirmLink} className="btn btn-outline-secondary" type="button">
            Confirm
          </button>
        </div>
      );
    }
    return (
      <form action="#" method="post" onSubmit={this.onMessageSubmit}>
        <div className="form-group mx-3">
          <div className="mb-1">
            <button onMouseDown={this.onBoldClick} className="btn btn-outline-secondary" type="button"><b>B</b></button>
            <button onMouseDown={this.onItalicClick} className="btn btn-outline-secondary" type="button"><i>I</i></button>
            <button onMouseDown={this.onStrikethroughClick} className="btn btn-outline-secondary" type="button"><s>S</s></button>
            {urlInput}
          </div>
          <div className="input-group flex-d">
            <div className="flex-grow-1">
              <div style={{ border: '1px solid grey', borderRadius: '5px 0 0 5px', padding: '6px' }}>
                <Editor
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  ref={this.setEditorRef}
                  keyBindingFn={this.keyBindingFn}
                  handleKeyCommand={this.handleKeyCommand}
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
