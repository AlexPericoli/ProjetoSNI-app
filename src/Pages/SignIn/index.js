import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

import {
   Container,
   LogoArea,
   Logotipo,
   Texto,
   Titulo,
   FormArea,
   InputEmail,
   InputPassword,
   ButtonLogin,
   ButtonLoginText,
} from './styles';

//import LogoImg from '../../assets/images.jpeg';

export default function SignIn() {
   const navigation = useNavigation();
   const nomeUsuario = useSelector((state) => state.usuarios.nome);
   const dispatch = useDispatch();

   const [email, setEmail] = useState('colaborador1@livrariasni.com.br');
   const [senha, setSenha] = useState('1234');
   const [msg, setMsg] = useState('');

   const createAlert = (msg) =>
      Alert.alert('Livraria SNI', msg || '', [
         {
            text: 'Ok',
            onPress: () => true,
         },
      ]);

   async function handleLogin() {
      const result = await fetch('http://192.168.15.13:3333/sessions', {
         method: 'POST',
         body: JSON.stringify({ email, senha }),
         headers: { 'Content-Type': 'application/json' },
      });

      const status = result.status;
      const json = await result.json();
      console.log(json);

      if (status !== 201) {
         createAlert(json);
         navigation.navigate('SignIn');
      } else {
         dispatch({
            type: '@usuarios/SET_TOKEN',
            payload: {
               token: json.token,
               nome: json.usuario.nome,
               id_assoc_local: json.usuario.assoc_local.id,
               nome_assoc_local: json.usuario.assoc_local.nome,
               id_funcao: json.usuario.funcao.id,
               nome_funcao: json.usuario.funcao.descricao
            },
         });
         navigation.reset({
            index: 1,
            routes: [{ name: 'TabsStack' }],
         });
      }
   }

   return (
      <Container>
         <LogoArea>
            <Logotipo source={require('../../assets/logotipo.jpg')} />
         </LogoArea>
         <Titulo>LIVRARIA SNI</Titulo>
         <Texto>{nomeUsuario}</Texto>

         <FormArea>
            <InputEmail
               placeholder="E-mail"
               onChangeText={(text) => setEmail(text)}
            />
            <InputPassword
               placeholder="Senha"
               onChangeText={(text) => setSenha(text)}
            />

            <ButtonLogin onPress={() => handleLogin()}>
               <ButtonLoginText>LOGIN</ButtonLoginText>
            </ButtonLogin>
         </FormArea>
      </Container>
   );
}
