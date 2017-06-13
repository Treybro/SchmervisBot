/**
 *  @providesModule ChatRoomReducer
 */

import { 
  FETCH_TICKET_DATA,
  RECEIVE_TICKET_DATA,
  SENDING_MESSAGE,
  MESSAGE_SENT,
} from 'ChatRoomActions';

//  Default state to prepare for null
const chatRoomReducerDefaultState = {
  fetchingMessages: false,
  channelName: '',
  messages: [],
  sendingMessage: false,
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
  case SENDING_MESSAGE: {
    let message = {
      //  TODO - Datestamp
      date: '21:31pm',
      sender: 'schmervisbot',
      messageContent: action.message,
    };
    return {
      ...state,
      sendingMessage: true,
      //  I dont know what order you want to display in, so im going with most recent on the bottom
      messages: [...state.messages, message],
    };
  }
  case MESSAGE_SENT: {
    return {
      ...state,
      sendingMessage: false,
    };
  }
  default:
    return state;
  }
};

export default chatRoomReducer;