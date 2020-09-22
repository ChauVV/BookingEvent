import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const InputTitle = (props) => {
  const {inputStyle, title} = props;

  return (
    <View style={[styles.container, inputStyle]}>
      <Text style={styles.lblTitle}>{title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default InputTitle;

InputTitle.defaultProps = {};
InputTitle.propTypes = {};

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
  input: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 14,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
  },
});
