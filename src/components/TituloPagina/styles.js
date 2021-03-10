import styled from 'styled-components/native';

export const TituloArea = styled.View`
   width: 100%;
   height: 55px;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   background-color: ${(props) => props.corFundo};
`;

export const TituloIcone = styled.Image`
   width: 55px;
   height: 55px;
   margin-right: 20px;
`;

export const TituloTexto = styled.Text`
   font-size: 22px;
   font-family: 'Lato-Italic';
   color: ${(props) => props.corTexto};
`;

export const CategoriaTexto = styled.Text`
   font-size: 17px;
   font-family: 'Archivo-Bold';
   color: ${(props) => props.corTexto};
`;
