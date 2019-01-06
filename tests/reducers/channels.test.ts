import * as Immutable from 'immutable';

import { channels } from '../../src/reducers/channels';
import { allChannels, channels as channelsState, byIdChannels, channel, channel2, message } from '../testingStateConstants';
import { CHANNELS_LOAD, CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_ADD_ALLOWED_USER, CHANNEL_RENAME, MESSAGES_LOAD, MESSAGE_SEND, MESSAGE_DELETE, MESSAGE_UPVOTE, MESSAGE_DOWNVOTE, CHANNEL_ORDER_CHANGE } from '../../src/constants/actionTypes';
import { IChannels, IChannel, IMessage, Uuid } from '../../src/common/interfaces';
import { ContentState } from 'draft-js';

const channelsLoadAction = {
  type: CHANNELS_LOAD,
  payload: {
    channels: allChannels,
    channelOrder: byIdChannels
  }
};
const channelCreateAction = {
  type: CHANNEL_CREATE,
  payload: {
    channel
  }
};
const emptyChannelsState: IChannels = {
  all: Immutable.Map(),
  byId: Immutable.List()
};
const channelsStateWithOnlyChannel2: IChannels = {
  all: Immutable.Map([[channel2.id, channel2]]),
  byId: Immutable.List([channel2.id])
};

describe('test actions on channels', () => {
  test('CHANNELS_LOAD action', () => {
    const newState = channels(emptyChannelsState, channelsLoadAction);

    expect(newState).toEqual(channelsState);
  });

  test('CHANNEL_CREATE action to empty state', () => {
    const newState = channels(emptyChannelsState, channelCreateAction);
    const expectedState: IChannels = {
      all: Immutable.Map([[channel.id, channel]]),
      byId: Immutable.List([channel.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('CHANNEL_CREATE action to nonempty state', () => {
    const newState = channels(channelsStateWithOnlyChannel2, channelCreateAction);
    const expectedState: IChannels = {
      all: Immutable.Map([[channel.id, channel], [channel2.id, channel2]]),
      byId: Immutable.List([channel2.id, channel.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('CHANNEL_DELETE action', () => {
    const channelDeleteAction = {
      type: CHANNEL_DELETE,
      payload: {
        channelId: channel.id
      }
    };
    const newState = channels(channelsState, channelDeleteAction);

    expect(newState).toEqual(channelsStateWithOnlyChannel2);
  });

  test('CHANNEL_ADD_ALLOWED_USER action', () => {
    const updatedChannel: IChannel = {
      ...channel,
      allowedUsers: channel.allowedUsers.add('newuser@test.test')
    };
    const channelAddAllowedUserAction = {
      type: CHANNEL_ADD_ALLOWED_USER,
      payload: {
        channel: updatedChannel
      }
    };
    const newState = channels(channelsState, channelAddAllowedUserAction);
    const expectedState: IChannels = {
      all: Immutable.Map([[updatedChannel.id, updatedChannel], [channel2.id, channel2]]),
      byId: Immutable.List([updatedChannel.id, channel2.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('CHANNEL_RENAME action', () => {
    const updatedChannel: IChannel = {
      ...channel2,
      name: 'new name'
    };
    const channelRenameAction = {
      type: CHANNEL_RENAME,
      payload: {
        channel: updatedChannel
      }
    };
    const newState = channels(channelsStateWithOnlyChannel2, channelRenameAction);
    const expectedState: IChannels = {
      all: Immutable.Map([[updatedChannel.id, updatedChannel]]),
      byId: Immutable.List([updatedChannel.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('MESSAGES_LOAD action', () => {
    const channel2withoutMessages: IChannel = {
      ...channel2,
      messages: Immutable.OrderedMap()
    };
    const channelsStateWithOnlyChannel2withoutMessages: IChannels = {
      all: Immutable.Map([[channel2withoutMessages.id, channel2withoutMessages]]),
      byId: Immutable.List([channel2withoutMessages.id])
    };
    const messagesLoadAction = {
      type: MESSAGES_LOAD,
      payload: {
        channelId: channel2.id,
        messages: channel2.messages
      }
    };
    const newState = channels(channelsStateWithOnlyChannel2withoutMessages, messagesLoadAction);

    expect(newState).toEqual(channelsStateWithOnlyChannel2);
  });

  test('MESSAGE_SEND action', () => {
    const newMessage: IMessage = {
      author: 'jacob@boss.net',
      createdAt: Date.now(),
      id: 'new message',
      score: 0,
      text: ContentState.createFromText('new message')
    };
    const messageSendAction = {
      type: MESSAGE_SEND,
      payload: {
        channelId: channel2.id,
        message: newMessage
      }
    };
    const newState = channels(channelsStateWithOnlyChannel2, messageSendAction);
    const updatedChannel2: IChannel = {
      ...channel2,
      messages: channel2.messages.set(newMessage.id, newMessage)
    };
    const expectedState: IChannels = {
      all: Immutable.Map([[updatedChannel2.id, updatedChannel2]]),
      byId: Immutable.List([updatedChannel2.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('MESSAGE_DELETE action', () => {
    const messageDeleteAction = {
      type: MESSAGE_DELETE,
      payload: {
        channelId: channel2.id,
        messageId: message.id
      }
    };
    const newState = channels(channelsStateWithOnlyChannel2, messageDeleteAction);
    const updatedChannel2: IChannel = {
      ...channel2,
      messages: channel2.messages.delete(message.id)
    };
    const expectedState: IChannels = {
      all: Immutable.Map([[updatedChannel2.id, updatedChannel2]]),
      byId: Immutable.List([updatedChannel2.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('MESSAGE_UPVOTE action', () => {
    const messageUpvoteAction = {
      type: MESSAGE_UPVOTE,
      payload: {
        channelId: channel2.id,
        messageId: message.id
      }
    };
    const newState = channels(channelsStateWithOnlyChannel2, messageUpvoteAction);

    const updatedMessage: IMessage = {
      ...message,
      score: message.score + 1
    };
    const updatedChannel2: IChannel = {
      ...channel2,
      messages: channel2.messages.set(message.id, updatedMessage)
    };
    const expectedState: IChannels = {
      all: Immutable.Map([[updatedChannel2.id, updatedChannel2]]),
      byId: Immutable.List([updatedChannel2.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('MESSAGE_DOWNVOTE action', () => {
    const messageDownvoteAction = {
      type: MESSAGE_DOWNVOTE,
      payload: {
        channelId: channel2.id,
        messageId: message.id
      }
    };
    const newState = channels(channelsStateWithOnlyChannel2, messageDownvoteAction);

    const updatedMessage: IMessage = {
      ...message,
      score: message.score - 1
    };
    const updatedChannel2: IChannel = {
      ...channel2,
      messages: channel2.messages.set(message.id, updatedMessage)
    };
    const expectedState: IChannels = {
      all: Immutable.Map([[updatedChannel2.id, updatedChannel2]]),
      byId: Immutable.List([updatedChannel2.id])
    };

    expect(newState).toEqual(expectedState);
  });

  test('CHANNEL_ORDER_CHANGE action', () => {
    const newChannelOrder = Immutable.List<Uuid>([channel2.id, channel.id]);
    const channelOrderChangeAction = {
      type: CHANNEL_ORDER_CHANGE,
      payload: {
        channelOrder: newChannelOrder
      }
    };
    const newState = channels(channelsState, channelOrderChangeAction);
    const expectedState: IChannels = {
      ...channelsState,
      byId: newChannelOrder
    };

    expect(newState).toEqual(expectedState);
  });
});
