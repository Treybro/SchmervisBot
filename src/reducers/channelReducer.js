/**
 *  @providesModule ChannelReducer
 */

import {
  FETCHING_AVAILABLE_CHANNELS,
  RECEIVED_AVAILABLE_CHANNELS,
} from 'ChannelActions';

//  Default state to prepare for null
const channelReducerDefaultState = {
  fetchingAvailableChannels: false,
  availableChannels: [],
};

const channelReducer = (state = channelReducerDefaultState, action) => {
  switch(action.type) {
  case FETCHING_AVAILABLE_CHANNELS: {
    return {
      ...state,
      fetchingAvailableChannels: true,
      availableChannels: [],
    };
  }
  case RECEIVED_AVAILABLE_CHANNELS: {
    return {
      ...state,
      fetchingAvailableChannels: false,
      availableChannels: action.channelList,
    };
  }
  default:
    return state;
  }
};

export default channelReducer;