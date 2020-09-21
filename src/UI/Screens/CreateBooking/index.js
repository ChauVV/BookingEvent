import React from 'react';
import {StyleSheet, View} from 'react-native';
// import PropTypes from 'prop-types'

const CreateBooking = (props) => {
  return <View style={styles.container} />;
};

export default CreateBooking;

CreateBooking.defaultProps = {};
CreateBooking.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
