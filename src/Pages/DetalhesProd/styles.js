import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex: 1;
   align-items: center;
   justify-content: flex-start;
   background-color: #ccb;
`;

export const AreaDetalhes = styled.View`
   width: 97%;
   margin-top: 20px;
`;

export const AreaImagem = styled.View`
   width: 160px;
   height: 230px;
   border: 3px solid #000;
`;

export const AreaInfoProduto = styled.View`
   height: 250px;
   flex-direction: row;
   margin: 10px 5px;
`;

export const AreaInfo = styled.View`
   flex: 1;
   margin-left: 10px;
`;

export const AreaVendas = styled.View``;

export const VendasScroll = styled.ScrollView`
   height: 130px;
   padding: 7px 4px;
   margin-bottom: 20px;
   background-color: #eee;
`;

export const AreaBotao = styled.View`
   align-items: center;
   justify-content: center;
   margin-top: 15px;
`;

export const ProdutoNome = styled.Text`
   color: #129;
   font-size: 25px;
   font-family: 'Lato-Medium';
   padding-left: 5px;
   border-bottom-width: 1px;
   border-bottom-color: #000;
`;
export const ProdutoImagem = styled.Image`
   width: 100%;
   height: 100%;
`;

export const ProdutoDescricao = styled.Text`
   font-size: 17px;
   padding: 2px 4px;
   font-family: 'Lato-Italic';
`;
export const ProdutoInfo = styled.Text`
   color: #000;
   font-size: 17px;
   font-family: 'Roboto-Regular';
`;

export const ProdutoInfoDestaque = styled.Text`
   color: #248;
   font-size: 22px;
   font-family: 'Roboto-Regular';
   margin-bottom: 25px;
`;

export const BotaoAdicionarVenda = styled.TouchableOpacity`
   width: 80%;
   padding: 8px 0;
   border-radius: 8px;
   border: 2px solid #143;
   background-color: #4b7;
`;

export const BotaoAdicionarVendaTexto = styled.Text`
   color: #000;
   font-size: 16px;
   text-align: center;
`;
