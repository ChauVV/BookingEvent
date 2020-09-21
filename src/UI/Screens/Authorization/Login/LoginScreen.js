import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = (props) => {
  const {login, isLoging} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const disabled = username.length === 0 || password.length === 0;

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.lblTitle}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="abc@gmail.com"
        />
        <Text style={styles.lblTitle}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
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
    width: '60%',
    height: 40,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
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
