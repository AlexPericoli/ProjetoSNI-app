import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsList from '../Pages/ProductsList';
import DetalhesProd from '../Pages/DetalhesProd';

const Stack = createStackNavigator();

export default () => (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductsList" component={ProductsList} />
      <Stack.Screen name="DetalhesProd" component={DetalhesProd} />
   </Stack.Navigator>
);
