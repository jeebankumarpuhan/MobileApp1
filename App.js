import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SpalshScreen from "./views/screens/authentication/SpalshScreen"
import { navigationRef } from './views/lib/Rootnavigation';
import Login from './views/screens/authentication/Login';
import Register from './views/screens/authentication/Resister';
import Dashboard from './views/screens/dashboard/Dashboard';


const Stack = createNativeStackNavigator();
// const store = configureStore();
export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <Provider store={store}> */}
        <Stack.Navigator>
          <Stack.Screen name="SpalshScreen" component={SpalshScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />



        </Stack.Navigator>
        {/* <Loader /> */}
      {/* </Provider> */}
    </NavigationContainer >
  );
}
