import React from 'react';
import { useNavigation } from '@react-navigation/native';

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

import LogoImg from '../../assets/images.jpeg';

export default function SignIn() {
   const navigation = useNavigation();

   const [email, setEmail] = React.useState('');
   const [senha, setSenha] = React.useState('');

   function handleSubmit() {
      navigation.navigate('TabsStack');
   }

   return (
      <Container>
         <LogoArea>
            <Logotipo source={require('../../assets/logotipo.jpg')} />
         </LogoArea>
         <Titulo>Livraria SNI</Titulo>

         <FormArea>
            <InputEmail
               placeholder="E-mail"
               onChangeText={(text) => setEmail(text)}
            />
            <InputPassword
               placeholder="Senha"
               onChangeText={(text) => setSenha(text)}
            />

            <ButtonLogin onPress={() => handleSubmit()}>
               <ButtonLoginText>LOGIN</ButtonLoginText>
            </ButtonLogin>
         </FormArea>
      </Container>
   );
}
