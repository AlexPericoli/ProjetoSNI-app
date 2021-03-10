import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

import ProdutosStack from './ProdutosStack';
import ConsultaHoje from '../Pages/ConsultaHoje';
import PerfilUsuario from '../Pages/PerfilUsuario';

export default () => (
   <Tabs.Navigator initialRouteName="ProdutosStack">
      <Tabs.Screen name="ProdutosStack" component={ProdutosStack} />
      <Tabs.Screen name="ConsultaHoje" component={ConsultaHoje} />
      <Tabs.Screen name="PerfilUsuario" component={PerfilUsuario} />
   </Tabs.Navigator>
);
