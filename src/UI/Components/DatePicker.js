import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = (props) => {
  const {onSelect, title, inputStyle, placeholder} = props;

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(null);

  const handleConfirm = (v) => {
    const date = v.toISOString().replace('Z', '');
    setValue(date);
    onSelect(date);
    setVisible(false);
  };
  const hideDatePicker = () => setVisible(false);
  const showMode = () => setVisible(true);

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, inputStyle]}
        onPress={showMode}>
        <Text style={styles.lblTitle}>{title}</Text>
        <View style={styles.inputV}>
          {value ? (
            <Text style={styles.input}>{value}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;

DatePicker.defaultProps = {
  data: [],
};
DatePicker.propTypes = {};

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  lblTitle: {
    width: '60%',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputV: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    color: 'black',
  },
  placeholder: {
    fontSize: 14,
    color: '#C7C7CD',
  },
});
