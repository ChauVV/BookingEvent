import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputTitle from 'components/InputTitle';

const LoginScreen = (props) => {
  const {login, isLoging} = props;
  const [username, setUsername] = useState('hr1@gmail.com');
  const [password, setPassword] = useState('123456aA');

  const disabled = username.length === 0 || password.length === 0;

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <InputTitle
          editable={!isLoging}
          title={'Username'}
          value={username}
          onChangeText={setUsername}
          placeholder="abc@gmail.com"
        />
        <InputTitle
          editable={!isLoging}
          title={'Password'}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
        <TouchableOpacity
          disabled={disabled || isLoging}
          style={[styles.btn, disabled && styles.disabled]}
          onPress={() => login({username, password})}>
          {isLoging ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.btnText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  title: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  btn: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
  },
});
