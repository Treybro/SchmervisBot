/**
 *  @providesModule ChatRoomActions
 */

export const GET_CHATS_FOR_CHANNEL = 'GET_CHATS_FOR_CHANNEL';
export const FETCH_CHATS_FROM_CHANNEL = 'FETCH_CHATS_FROM_CHANNEL';
export const RECEIVE_CHATS = 'RECEIVE_CHATS';

import appSettings from 'AppSettings';

//  Tell the app to get chats for a given channel
export const getAvailableChannels = channelName => {
  return function (dispatch) {
    dispatch (fetchChats(channelName));
    let load = setInterval(() => {
      clearInterval (load);
      return dispatch (receiveChats(['Hello','From','Mike']));
    }, appSettings.fakeLoadingTime);
  };
};

//  Tell the app we are fetching chats for a given channel
export const fetchChats = channelName => {
  return {
    type: FETCH_CHATS_FROM_CHANNEL,
    channelName,
  };
};

//  Tell the app we received a list of available channels
export const receiveChats = chats => {
  return {
    type: RECEIVE_CHATS,
    chats,
  };
};