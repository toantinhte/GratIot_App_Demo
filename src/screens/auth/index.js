import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Register from './register';
import ForgotPassword from './forgotPW';
import Login from './login';
import EnterPassword from './EnterPassword';
import VerifyPhone from './Verify';

export default function Auth() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
      <Stack.Screen name="EnterPassword" component={EnterPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
