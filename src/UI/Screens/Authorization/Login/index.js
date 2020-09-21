import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {connect} from 'react-redux';
import {Constants} from 'helpers';

import LoginScreen from './LoginScreen';

const Login = (props) => {
  const login = ({username, password}) => {
    props.login({
      username,
      password,
    });
  };

  return <LoginScreen login={login} isLoging={props.isLoging} />;
};

const mapStateToProps = (state) => ({
  isLoging: state.authen.isLoging,
});
const mapactionsTypeToProps = (dispatch) => ({
  login: (payload) =>
    dispatch({
      type: Constants.ACTION_TYPES.LOGIN,
      payload,
    }),
});
export default connect(mapStateToProps, mapactionsTypeToProps)(Login);
