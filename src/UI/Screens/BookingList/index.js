import React from 'react';
import {StyleSheet, View} from 'react-native';
// import PropTypes from 'prop-types'

const BookingList = (props) => {
  return <View style={styles.container} />;
};

export default BookingList;

BookingList.defaultProps = {};
BookingList.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
