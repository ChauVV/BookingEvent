import React from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types'

const keyExtractor = (item) => `${item._id}`

const renderItem = ({item}) => {
  return <View style={styles.cell}>
    <Text style={styles.title}>{`${item.event_title}`}</Text>
    <Text style={styles.subTitle}>{`Location: `}<Text style={styles.value}>{`${item.event_location}`}</Text></Text>
    <Text style={styles.subTitle}>{`Confirmed: `}<Text style={styles.value}>{`${item.confirmed_datetime}`}</Text></Text>
    <Text style={styles.subTitle}>{`Create at: `}<Text style={styles.value}>{`${item.created_at}`}</Text></Text>
</View>
}

const BookingList = (props) => {
  const {bookings, createBooking} = props

  return <View style={styles.container} >
    <FlatList
      data={bookings}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
    />
    <View style={styles.btnV}>
      <TouchableOpacity style={styles.btnAdd} onPress={createBooking}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
};

export default BookingList;

BookingList.defaultProps = {};
BookingList.propTypes = {};

const styles = StyleSheet.create({
  plus: {
    color: 'white',
    fontSize: 27,
    paddingBottom: 3,
  },
  btnAdd: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',

    justifyContent: 'center',
    alignItems: 'center',

    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'green',
    shadowRadius: 5,
    elevation: 5
  },
  btnV: {
    position: 'absolute',
    bottom: 60,
    right: 10,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 12
  },
  value: {
    fontSize: 12,
    color: 'gray'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  contentContainerStyle: {
    paddingVertical: 10
  },
  cell: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',

    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: '#444',
    shadowRadius: 5,
    elevation: 5
  },
  container: {
    flex: 1,
  },
});
