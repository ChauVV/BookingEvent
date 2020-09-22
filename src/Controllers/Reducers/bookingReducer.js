/* eslint-disable no-alert */
import {Constants} from 'helpers';

export default (state = Constants.INIT_STATES.bookings, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.GET_BOOKING_SUCCESS:
      if (action.payload.length > 4) {
        const data = action.payload.slice(
          action.payload.length - 5,
          action.payload.length,
        );
        return {
          ...state,
          data: data.reverse(),
        };
      }
      return {...state, data: action.payload};
    case Constants.ACTION_TYPES.GET_BOOKING_FAIL:
      alert('Get data fail!');
      return {...state};
    case Constants.ACTION_TYPES.CREATE_BOOKING_FAIL:
      alert('Create booking event fail!');
      return {...state};
    case Constants.ACTION_TYPES.CREATE_BOOKING_SUCCESS:
      alert('Create booking event Success!');
      return {...state};
    default:
      return state;
  }
};
