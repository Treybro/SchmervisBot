/**
 *  @providesModule ChatRoomReducer
 */

import { 
  FETCH_TICKET_DATA,
  RECEIVE_TICKET_DATA,
} from 'ChatRoomActions';

//  Default state to prepare for null
const chatRoomReducerDefaultState = {
  fetchingMessages: false,
  channelName: '',
  messages: [],
};

const chatRoomReducer = (state = chatRoomReducerDefaultState, action) => {
  switch(action.type) {
  case FETCH_TICKET_DATA: {
    return {
      ...state,
      channelName: action.channelName,
      fetchingMessages: true,
    };
  }
  case RECEIVE_TICKET_DATA: {
    return {
      ...state,
      fetchingMessages: false,
      messages: action.data.ticketMessages,
    };
  }
  default:
    return state;
  }
};

export default chatRoomReducer;