import React from 'react';

import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';

const StackNavigatior = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: colors.blueDark,
        },
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Page1Screen' component={Page1Screen} />
      <Stack.Screen name='Page2Screen' component={Page2Screen} />
      <Stack.Screen name='Page3Screen' component={Page3Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigatior;
