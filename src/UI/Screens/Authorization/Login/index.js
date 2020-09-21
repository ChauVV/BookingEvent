import React from 'react';

import {connect} from 'react-redux';
import {Constants} from 'helpers';

import LoginScreen from './Screen';

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
  isLoging: state.appState.isLoging,
});
const mapactionsTypeToProps = (dispatch) => ({
  login: (payload) =>
    dispatch({
      type: Constants.ACTION_TYPES.LOGIN,
      payload,
    }),
});
export default connect(mapStateToProps, mapactionsTypeToProps)(Login);
