import React from 'react';
import {connect} from 'react-redux';
import {Constants} from 'helpers';
import Screen from './Screen';

const CreateBooking = (props) => {
  const {username, createBooking, isLoading} = props;

  const create = (data) => {
    const payload = {
      event_title: data.typeEvent,
      event_location: data.location,
      confirmed_datetime: data.confirmDate,
      created_at: new Date().toISOString().replace('Z', ''),
      created_by: username,
    };
    createBooking(payload);
  };

  return <Screen create={create} isLoading={isLoading} />;
};

const mapStateToProps = (state) => ({
  username: state.authen.username,
  isLoading: state.appState.isCreateBooking,
});
const mapactionsTypeToProps = (dispatch) => ({
  createBooking: (payload) =>
    dispatch({
      type: Constants.ACTION_TYPES.CREATE_BOOKING,
      payload,
    }),
});
export default connect(mapStateToProps, mapactionsTypeToProps)(CreateBooking);

CreateBooking.defaultProps = {};
CreateBooking.propTypes = {};
