import {Platform, StatusBar} from 'react-native';

export const StatusBarHeight =
  Platform.OS === 'android'
    ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
    : 20;

export const RouteKey = {
  Login: 'Login',
  MainStack: 'MainStack',
  BookingList: 'BookingList',
  CreateBooking: 'CreateBooking',
};

export const ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  CANCEL_LOGIN: 'CANCEL_LOGIN',

  GET_BOOKING: 'GET_BOOKING',
  GET_BOOKING_SUCCESS: 'GET_BOOKING_SUCCESS',
  GET_BOOKING_FAIL: 'GET_BOOKING_FAIL',
  CANCEL_GET_BOOKING: 'CANCEL_GET_BOOKING',

  CREATE_BOOKING: 'CREATE_BOOKING',
  CREATE_BOOKING_SUCCESS: 'CREATE_BOOKING_SUCCESS',
  CREATE_BOOKING_FAIL: 'CREATE_BOOKING_FAIL',
  CANCLE_CREATE_BOOKING: 'CANCLE_CREATE_BOOKING',

  // navigation
  PUSH: 'push',
  POP: 'pop',
  REPLACE: 'REPLACE',
  POP_TO_TOP: 'popToTop',
  RESET_TO_ROUTE: 'resetToRoute',
  RESET: 'reset',
};

export const INIT_STATES = {
  authen: {
    isLogined: false,
    token: '',
    expiredToken: '',
    username: '',
    userId: '',
  },
  navigator: {
    screen: '',
  },
  appState: {
    isloading: false,
    isLoging: false,
    isGetBooking: false,
    isCreateBooking: false
  },
  bookings: {
    data: []
  }
};
