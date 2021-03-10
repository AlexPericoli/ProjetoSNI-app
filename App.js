import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

import { ThemeProvider } from 'styled-components';
import { CoresClaro } from './src/assets/styles/cores';

export default function App() {
   return (
      <NavigationContainer>
         <ThemeProvider theme={CoresClaro}>
            <MainStack />
         </ThemeProvider>
      </NavigationContainer>
   );
}
