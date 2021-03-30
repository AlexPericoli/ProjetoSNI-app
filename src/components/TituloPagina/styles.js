import styled from 'styled-components/native';

export const TituloArea = styled.View`
   width: 100%;
   padding: 7px;

   align-items: flex-start;
   justify-content: flex-start;

   background-color: ${(props) => props.corFundo};
`;

export const TituloTexto = styled.Text`
   font-size: 22px;
   font-family: 'Lato-Italic';
   color: ${(props) => props.corTexto};
`;

export const SubTitulo = styled.Text`
   color: #dd7;
   font-size: 13px;
`;

export const TituloIcone = styled.Image`
   width: 55px;
   height: 55px;
   margin-right: 20px;
`;
