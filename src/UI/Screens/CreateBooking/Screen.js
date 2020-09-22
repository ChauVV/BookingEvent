import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import InputTitle from 'components/InputTitle';
import Picker from 'components/Picker';
import DatePicker from 'components/DatePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const SCREEN_HEIGHT = Dimensions.get('window').height;

const DATA_PICKER = [
  {id: 1, label: 'Health Talk', value: 'Health Talk'},
  {id: 2, label: 'Wellness Events', value: 'Wellness Events'},
  {id: 3, label: 'Fitness Activities', value: 'Fitness Activities'},
];

const CreateBooking = (props) => {
  const {create, isLoading} = props;

  const [typeEvent, setTypeEvent] = useState('');
  const [location, setLocation] = useState('');
  const [confirmDate, setConfirmDate] = useState('');

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Picker
          data={DATA_PICKER}
          onSelect={setTypeEvent}
          inputStyle={styles.inputStyle}
          title={'Event'}
          placeholder="Event"
        />
        <InputTitle
          inputStyle={styles.inputStyle}
          title={'Location'}
          value={location}
          onChangeText={setLocation}
          placeholder="Location"
        />
        <DatePicker
          inputStyle={styles.inputStyle}
          title={'Confirm Date'}
          onSelect={setConfirmDate}
          placeholder="Confirm Date"
        />

        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => create({typeEvent, location, confirmDate})}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <View style={styles.loadingV}>
          <ActivityIndicator />
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default CreateBooking;

CreateBooking.defaultProps = {};
CreateBooking.propTypes = {};

const styles = StyleSheet.create({
  loadingV: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(0, 0, 0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 70,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 14,
  },
  inputStyle: {
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 10,
  },
});
