/**
 *  @providesModule ChatRoomReducer
 */

import { 
  FETCH_CHATS_FROM_CHANNEL,
  RECEIVE_CHATS,
} from 'ChatRoomActions';

//  Default state to prepare for null
const chatRoomReducerDefaultState = {
  fetchingChats: false,
  channelName: '',
  chats: [],
};

const chatRoomReducer = (state = chatRoomReducerDefaultState, action) => {
  switch(action.type) {
  case FETCH_CHATS_FROM_CHANNEL: {
    return {
      ...state,
      channelName: action.channelName,
      fetchingChats: true,
    };
  }
  case RECEIVE_CHATS: {
    return {
      ...state,
      fetchingChats: false,
      chats: action.chats,
    };
  }
  default:
    return state;
  }
};

export default chatRoomReducer;