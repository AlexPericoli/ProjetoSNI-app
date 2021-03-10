import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: ${(props) => props.theme.fundo_azul_sni};
`;

export const LogoArea = styled.View`
   width: 63%;
   height: 40%;
   padding: 10px;
   margin-bottom: 10px;
   background-color: ${(props) => props.theme.branco_1};
   border-radius: 20px;
`;
export const Logotipo = styled.Image`
   width: 100%;
   height: 100%;
`;

export const Titulo = styled.Text`
   color: #fff;
   font-size: 37px;
   font-family: 'Roboto-Medium';
`;

export const Texto = styled.Text`
   color: #fff;
   font-size: 24px;
   font-family: 'Archivo-Medium';
`;

export const FormArea = styled.View`
   width: 90%;
   height: 150px;
   margin-top: 55px;
   align-items: center;
   justify-content: center;
`;

export const InputEmail = styled.TextInput`
   width: 80%;
   font-size: 18px;
   font-family: 'Archivo-Medium';
   padding: 10px 12px;
   background-color: #ddd;
   margin-bottom: 11px;
   border-radius: 15px;
`;

export const InputPassword = styled.TextInput`
   width: 80%;
   font-size: 18px;
   font-family: 'Archivo-Medium';
   padding: 10px 12px;
   background-color: #ddd;
   margin-bottom: 15px;
   border-radius: 15px;
`;

export const ButtonLogin = styled.TouchableOpacity`
   width: 80%;
   border-radius: 15px;
   background-color: ${(props) => props.theme.botao_login};
`;

export const ButtonLoginText = styled.Text`
   padding: 10px;
   text-align: center;
   color: #000;
   font-size: 16px;
   font-family: 'Archivo-Bold';
`;
