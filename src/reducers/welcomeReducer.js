/**
 *  @providesModule WelcomeReducer
 */

import { ENTER_APP } from 'WelcomeActions';

//  Default state to prepare for null
const welcomeReducerDefaultState = {
  hasBeenWelcomed: false,
};

const welcomeReducer = (state = welcomeReducerDefaultState, action) => {
  switch(action.type) {
  case ENTER_APP: {
    return {
      ...state,
      hasBeenWelcomed: true,
    };
  }
  default:
    return state;
  }
};

export default welcomeReducer;