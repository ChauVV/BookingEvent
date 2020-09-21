/* eslint-disable no-alert */
import {Constants} from 'helpers';

export default (state = Constants.INIT_STATES.bookings, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.GET_BOOKING_SUCCESS:
      if (action.payload.length > 4) {
        return {...state, data: action.payload.slice(0, 5)};
      }
      return {...state, data: action.payload};
    case Constants.ACTION_TYPES.GET_BOOKING_FAIL:
      alert('Get data fail!');
      return {...state, data: []};
    default:
      return state;
  }
};
