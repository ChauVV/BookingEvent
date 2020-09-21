import {combineReducers} from 'redux';

import authenReducer from './authenReducer';
import navigationReducer from './navigationReducer';
import appStateReducer from './appStateReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
  authen: authenReducer,
  navigator: navigationReducer,
  appState: appStateReducer,
  bookings: bookingReducer
});
