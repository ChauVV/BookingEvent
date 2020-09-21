import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
// import PropTypes from 'prop-types'

const keyExtractor = (item) => `${item._id}`

const renderItem = (item) => {
  console.log('item: ', item);
  return <View style={styles.cell}/>
}

const BookingList = (props) => {
  console.log('bookinglist: ', props);
  const {bookings} = props

  return <View style={styles.container} >
    <FlatList
      data={bookings}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
    />
  </View>
};

export default BookingList;

BookingList.defaultProps = {};
BookingList.propTypes = {};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 10
  },
  cell: {
    height: 100,
    marginBottom: 10,
    backgroundColor: 'gray'
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
