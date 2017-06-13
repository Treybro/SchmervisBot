/**
 * @providesModule AppReducers
 */

import { combineReducers } from 'redux';
import welcomeReducer from 'WelcomeReducer';
import channelReducer from 'ChannelReducer';
import chatRoomReducer from 'ChatRoomReducer';

const appReducers = combineReducers ({
  welcomeReducer,
  channelReducer,
  chatRoomReducer,
});

export default appReducers;