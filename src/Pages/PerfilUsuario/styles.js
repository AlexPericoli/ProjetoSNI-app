import styled from 'styled-components/native';

const FundoPadrao = (props) => props.theme.fundo_padrao;
const Branco1 = (props) => props.theme.branco_1;

export const Container = styled.SafeAreaView`
   flex: 1;
   align-items: center;
   justify-content: flex-start;
   background-color: ${FundoPadrao};
`;
export const AreaPerfil = styled.View`
   flex: 1;
   width: 97%;
   margin-top: 20px;
   align-items: center;
   justify-content: flex-start;
`;

export const AreaImagem = styled.View`
   width: 170px;
   height: 150px;
`;

export const AreaInfo = styled.View`
   width: 100%;
   margin-left: 10px;
   margin-top: 10px;
   align-items: center;
`;

export const AreaBotao = styled.View``;

export const FotoPerfil = styled.Image`
   width: 100%;
   height: 100%;
   border-radius: 85px;
`;

export const InfoNome = styled.Text`
   font-size: 22px;
   font-weight: bold;
`;

export const InfoFuncao = styled.Text`
   font-size: 16px;
   font-weight: bold;
   margin-bottom: 7px;
`;

export const InfoRegional = styled.Text`
   font-size: 16px;
`;

export const Info = styled.Text`
   text-align: center;
`;

export const BotaoVoltar = styled.TouchableOpacity`
   width: 50%;
   padding: 10px 25px;
   margin-top: 60px;
   border-radius: 8px;
   background-color: green;
`;

export const BotaoVoltarTexto = styled.Text`
   color: ${Branco1};
   font-size: 16px;
`;
