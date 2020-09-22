import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// import PropTypes from 'prop-types'

const FloatBtn = ({onPress}) => {
  return (
    <View style={styles.btnV}>
      <TouchableOpacity style={styles.btnAdd} onPress={onPress}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatBtn;

FloatBtn.defaultProps = {
  onPress: () => {},
};
FloatBtn.propTypes = {};

const styles = StyleSheet.create({
  plus: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  btnAdd: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',

    justifyContent: 'center',
    alignItems: 'center',

    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'green',
    shadowRadius: 5,
    elevation: 5,
  },
  btnV: {
    position: 'absolute',
    bottom: 60,
    right: 0,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
