import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import FloatBtn from 'components/FloatBtn';

const keyExtractor = (item) => `${item._id}`;

const renderItem = ({item}) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.title}>{`${item.event_title}`}</Text>
      <Text style={styles.subTitle}>
        {'Location:      '}
        <Text style={styles.value}>{`${item.event_location}`}</Text>
      </Text>
      <Text style={styles.subTitle}>
        {'Confirmed:  '}
        <Text style={styles.value}>{`${item.confirmed_datetime}`}</Text>
      </Text>
      <Text style={styles.subTitle}>
        {'Create at:     '}
        <Text style={styles.value}>{`${item.created_at}`}</Text>
      </Text>
    </View>
  );
};

const BookingList = (props) => {
  const {bookings, createBooking, isLoading} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <FloatBtn onPress={createBooking} />
      {isLoading && (
        <View style={styles.loadingV}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

export default BookingList;

BookingList.defaultProps = {};
BookingList.propTypes = {};

const styles = StyleSheet.create({
  loadingV: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
  },
  value: {
    fontSize: 12,
    color: 'gray',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  contentContainerStyle: {
    paddingVertical: 10,
  },
  cell: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',

    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#444',
    shadowRadius: 5,
    elevation: 5,
  },
  container: {
    flex: 1,
  },
});
