/**
 *  @providesModule ChatRoomActions
 */

export const FETCH_TICKET_DATA = 'FETCH_TICKET_DATA';
export const RECEIVE_TICKET_DATA = 'RECEIVE_TICKET_DATA';
export const SENDING_MESSAGE = 'SEND_MESSAGE';
export const MESSAGE_SENT = 'MESSAGE_SENT';

import appSettings from 'AppSettings';
const sampleTicketData = require ('../data/sampleTicketData.json');

//  Tell the app to get ticket information for a given channel
export const getTicketData = channelName => {
  return function (dispatch) {
    dispatch (fetchTicketData(channelName));
    let load = setInterval(() => {
      clearInterval (load);
      return dispatch (receiveTicketData(sampleTicketData));
    }, appSettings.fakeLoadingTime);
  };
};

//  Tell the app we are fetching ticket data for a given channel
export const fetchTicketData = channelName => {
  return {
    type: FETCH_TICKET_DATA,
    channelName,
  };
};

//  Tell the app we received a list of messages
export const receiveTicketData = data => {
  return {
    type: RECEIVE_TICKET_DATA,
    data,
  };
};

//  Send message to channel
export const sendMessage = message => {
  return function (dispatch) {
    dispatch(sendingMessage(message));
    return dispatch (messageSent());
  };
};

//  Tell app we are sending message
export const sendingMessage = message => {
  return {
    type: SENDING_MESSAGE,
    message,
  };
};

//  Tell the app we sent a message
export const messageSent = () => {
  return {
    type: MESSAGE_SENT,
  };
};