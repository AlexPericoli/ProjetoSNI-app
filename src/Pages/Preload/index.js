import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Texto } from './styles';

export function Preload() {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   const token = useSelector((state) => state.usuarios.token);

   useEffect(() => {
      async function checkLogin() {
         if (token) {
            // Validação de token
            try {
               // Validação do token
               const result = await fetch(
                  'http://192.168.15.13:3333/sessions/valida_auth',
                  {
                     method: 'GET',
                     headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                     },
                  },
               );

               // Se o token não for válido, zera e vai para a tela de login
               if (result.status !== 201) {
                  dispatch({
                     type: '@usuarios/SET_TOKEN',
                     payload: { token: '' },
                  });
                  navigation.reset({
                     index: 1,
                     routes: [{ name: 'SignIn' }],
                  });
               } else {
                  navigation.navigate('TabsStack');
               }
            } catch (err) {}
         } else {
            navigation.reset({
               index: 1,
               routes: [{ name: 'SignIn' }],
            });
         }
      }
      checkLogin();
   }, []);

   return (
      <Container>
         <Texto>Alexandre Sucesso</Texto>
      </Container>
   );
}
