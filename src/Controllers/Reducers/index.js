import {combineReducers} from 'redux';

import authenReducer from './authenReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  authen: authenReducer,
  navigator: navigationReducer,
});
