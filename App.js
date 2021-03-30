import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

import MainStack from './src/stacks/MainStack';

import { ThemeProvider } from 'styled-components';
import { CoresClaro } from './src/assets/styles/cores';

const store = createStore(reducers);

export default function App() {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <ThemeProvider theme={CoresClaro}>
               <MainStack />
            </ThemeProvider>
         </NavigationContainer>
      </Provider>
   );
}
