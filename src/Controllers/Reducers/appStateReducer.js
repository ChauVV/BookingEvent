/* eslint-disable no-alert */
import {Constants} from 'helpers';

export default (state = Constants.INIT_STATES.appState, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.LOGIN:
      return {...state, isLoging: true};
    case Constants.ACTION_TYPES.LOGIN_SUCCESS:
    case Constants.ACTION_TYPES.LOGIN_FAIL:
    case Constants.ACTION_TYPES.CANCEL_LOGIN:
      return {...state, isLoging: false};

    case Constants.ACTION_TYPES.GET_BOOKING:
      return {...state, isGetBooking: true};
    case Constants.ACTION_TYPES.GET_BOOKING_SUCCESS:
    case Constants.ACTION_TYPES.GET_BOOKING_FAIL:
    case Constants.ACTION_TYPES.CANCEL_GET_BOOKING:
      return {...state, isGetBooking: false};

    case Constants.ACTION_TYPES.CREATE_BOOKING:
      return {...state, isCreateBooking: true};
    case Constants.ACTION_TYPES.CREATE_BOOKING_SUCCESS:
    case Constants.ACTION_TYPES.CREATE_BOOKING_FAIL:
    case Constants.ACTION_TYPES.CANCLE_CREATE_BOOKING:
      return {...state, isCreateBooking: false};

    default:
      return state;
  }
};
