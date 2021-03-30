import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import TabsStack from '../stacks/TabsStack';
import { Preload } from '../Pages/Preload';

const Stack = createStackNavigator();

export default () => (
   <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabsStack" component={TabsStack} />
   </Stack.Navigator>
);
