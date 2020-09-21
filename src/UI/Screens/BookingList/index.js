import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {Constants} from 'helpers';

import Screen from './Screen';

const BookingList = (props) => {
  const {getBooking, username, bookings, navigation} = props

  useEffect(() => {
    getBooking({username});
  }, [])

  const createBooking = () => {
    navigation.push(Constants.RouteKey.CreateBooking)
  }
  
  return <Screen bookings={[...bookings]} createBooking={createBooking}/>;
};

const mapStateToProps = (state) => ({
  username: state.authen.username,
  bookings: state.bookings.data
});
const mapactionsTypeToProps = (dispatch) => ({
  getBooking: (payload) =>
    dispatch({
      type: Constants.ACTION_TYPES.GET_BOOKING,
      payload,
    }),
});
export default connect(mapStateToProps, mapactionsTypeToProps)(BookingList);
