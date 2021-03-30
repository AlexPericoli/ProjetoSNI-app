import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: ${(props) => props.theme.fundo_padrao};
`;

export const LogoArea = styled.View`
   width: 53%;
   height: 30%;
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
   color: #000;
   font-size: 37px;
   font-family: 'Roboto-Medium';
`;

export const Texto = styled.Text`
   color: #149;
   font-size: 19px;
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
   width: 100%;
   font-size: 18px;
   font-family: 'Archivo-Medium';
   padding: 10px 12px;
   margin-bottom: 11px;
   border-radius: 15px;
   border-bottom-color: #000;
   border-bottom-width: 1px;
`;

export const InputPassword = styled.TextInput`
   width: 100%;
   font-size: 18px;
   font-family: 'Archivo-Medium';
   padding: 10px 12px;
   margin-bottom: 15px;
   border-radius: 15px;
   border-bottom-color: #000;
   border-bottom-width: 1px;
`;

export const ButtonLogin = styled.TouchableOpacity`
   width: 100%;
   border-radius: 15px;
   background-color: ${(props) => props.theme.botao_login};
`;

export const ButtonLoginText = styled.Text`
   padding: 10px;
   text-align: center;
   color: ${(props) => props.theme.texto_escuro_1};;
   font-size: 16px;
   font-family: 'Archivo-Bold';
`;
