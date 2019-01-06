import { activeChannel } from '../../src/reducers/activeChannel';
import { CHANNEL_SELECT } from '../../src/constants/actionTypes';
import { unknownAction } from '../testingStateConstants';

const selectedChannelBefore = 'selectedChannelBefore';
const selectedChannelAfter = 'selectedChannelAfter';
const selectChannelAction = {
  type: CHANNEL_SELECT,
  payload: {
    channelId: selectedChannelAfter
  }
};

describe('activeChannel reducer', () => {
  test('for ACTIVE_CHANNEL action returns correct state', () => {
    const updatedState = activeChannel(selectedChannelBefore, selectChannelAction);
    expect(updatedState).toEqual(selectedChannelAfter);
  });

  test('for other action returns previous state', () => {
    const updatedState = activeChannel(selectedChannelBefore, unknownAction);
    expect(updatedState).toEqual(selectedChannelBefore);
  });
});
