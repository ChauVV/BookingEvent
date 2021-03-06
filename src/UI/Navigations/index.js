import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from 'screens/Authorization/Login';

import BookingList from 'screens/BookingList';
import CreateBooking from 'screens/CreateBooking';

import {Colors} from 'theme';

const navigationRef = React.createRef();

const Authorization = createStackNavigator();
const AuthorizationStack = () => {
  return (
    <>
      <StatusBar />
      <Authorization.Navigator>
        <Authorization.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
      </Authorization.Navigator>
    </>
  );
};

const MainSk = createStackNavigator();
const MainStack = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <MainSk.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: Colors.header},
        }}>
        <MainSk.Screen
          options={{title: 'DashBoard'}}
          name="BookingList"
          component={BookingList}
        />
        <MainSk.Screen
          name="CreateBooking"
          component={CreateBooking}
          options={{title: 'Create New Booking', headerBackTitle: ' '}}
        />
      </MainSk.Navigator>
    </>
  );
};

const Root = createStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name="AuthorizationStack" component={AuthorizationStack} />
        <Root.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigation, navigationRef};
