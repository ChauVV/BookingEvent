/* eslint-disable no-alert */
import {Constants} from 'helpers';

export default (state = Constants.INIT_STATES.authen, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.LOGIN_SUCCESS:
      return {...state, isLogined: true, username: action.payload.username};
    case Constants.ACTION_TYPES.LOGIN_FAIL:
      alert('Username or password is incorrect!');
      return {...state, isLogined: false};
    default:
      return state;
  }
};
