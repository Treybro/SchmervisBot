/**
 *  @providesModule ChannelActions
 */

export const GET_AVAILABLE_CHANNELS = 'GET_AVAILABLE_CHANNELS';
export const FETCHING_AVAILABLE_CHANNELS = 'FETCHING_AVAILABLE_CHANNELS';
export const RECEIVED_AVAILABLE_CHANNELS = 'RECEIVED_AVAILABLE_CHANNELS';

import appSettings from 'AppSettings';
const channels = require ('../data/channelList.json');

//  Tell the app we want to get the list of available channels
export const getAvailableChannels = () => {
  return function (dispatch) {
    dispatch (fetchAvailableChannels());
    let load = setInterval(() => {
      clearInterval (load);
      return dispatch (receivedAvailableChannels(channels.channelList));
    }, appSettings.fakeLoadingTime);
  };
};

//  Tell the app we are fetching channels
export const fetchAvailableChannels = () => {
  return {
    type: FETCHING_AVAILABLE_CHANNELS,
  };
};

//  Tell the app we received a list of available channels
export const receivedAvailableChannels = channelList => {
  return {
    type: RECEIVED_AVAILABLE_CHANNELS,
    channelList,
  };
};