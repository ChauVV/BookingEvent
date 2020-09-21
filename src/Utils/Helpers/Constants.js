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
  CANCEL_LOGIN: 'CANCEL_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
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
    isLoging: false,
    token: '',
    expiredToken: '',
    username: '',
    userId: '',
  },
  navigator: {
    screen: '',
  },
};
