/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';

import Modal from 'react-native-modal';
// import PropTypes from 'prop-types'

const PickerList = (props) => {
  const {data, cancel, onPick} = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      setValue(data[data.length - 1].value);
    }
  }, []);

  const select = () => {
    onPick(value);
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={cancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={select}>
          <Text style={styles.ok}>OK</Text>
        </TouchableOpacity>
      </View>
      <Picker
        selectedValue={value}
        style={styles.picker}
        onValueChange={(itemValue, _) => {
          setValue(itemValue);
        }}>
        {data.map((item) => {
          return (
            <Picker.Item key={item.id} label={item.label} value={item.value} />
          );
        })}
      </Picker>
    </View>
  );
};

const PickerView = (props) => {
  const {onSelect, title, inputStyle, data, placeholder} = props;

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const onPick = (v) => {
    setValue(v);
    onSelect(v);
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={[styles.container, inputStyle]} onPress={open}>
        <Text style={styles.lblTitle}>{title}</Text>
        <View style={styles.inputV}>
          {value.length > 0 ? (
            <Text style={styles.input}>{value}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>
      </TouchableOpacity>
      <Modal isVisible={visible} style={styles.modal}>
        <PickerList data={data} cancel={close} onPick={onPick} />
      </Modal>
    </View>
  );
};

export default PickerView;

PickerView.defaultProps = {
  data: [],
};
PickerView.propTypes = {};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  btn: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  ok: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },
  picker: {
    width: '100%',
  },
  header: {
    height: 35,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

    borderBottomWidth: 1,
    borderColor: '#C7C7CD',
  },
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
  },
  placeholder: {
    fontSize: 14,
    color: '#C7C7CD',
  },
});
