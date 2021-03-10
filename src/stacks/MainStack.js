import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import TabsStack from '../stacks/TabsStack';

const Stack = createStackNavigator();

export default () => (
   <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabsStack" component={TabsStack} />
   </Stack.Navigator>
);
