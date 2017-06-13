/**
 *  @providesModule ConfigureStore
 */

import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducers from 'AppReducers';

//  Returns a configured redux store
export default function configureStore(preloadedState) {
  return createStore(
    appReducers,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}