import styled from 'styled-components/native';

const ListaProdutos_Nome = (props) => props.theme.produtos.nome_produto;
const Preto1 = (props) => props.theme.preto_1;
const Branco3 = (props) => props.theme.branco_3;

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
   width: 50%;
   height: auto;
   border: 3px solid #000;
`;

export const AreaInfoProduto = styled.View`
   height: 250px;
   flex-direction: row;
   margin: 10px 5px;
`;

export const TextArea = styled.View``;

export const AreaInfo = styled.View`
   flex: 1;
   justify-content: space-between;

   margin-left: 10px;
`;

export const AreaBotao = styled.View`
   width: 100%;
   align-items: center;
   justify-content: center;
   background-color: gold;
`;

export const AreaVendas = styled.View``;

export const VendasScroll = styled.ScrollView`
   height: 130px;
   padding: 0 4px;
   margin-bottom: 20px;
   background-color: #eee;
`;

export const ProdutoNome = styled.Text`
   color: ${ListaProdutos_Nome};
   font-size: 17px;
   font-family: 'Roboto-Medium';
   line-height: 20px;
   letter-spacing: 1px;
   text-transform: uppercase;
   border-bottom-width: 1px;
   border-bottom-color: ${Preto1};
`;

export const ProdutoImagem = styled.Image`
   width: 100%;
   height: 100%;
`;

export const ProdutoDescricao = styled.Text`
   font-size: 14px;
   padding: 2px 4px;
   font-family: 'Lato-Italic';
`;

export const ProdutoInfo = styled.Text`
   font-size: 15px;
   font-family: 'Archivo';
   line-height: 19px;
`;

export const ProdutoInfoBold = styled.Text`
   font-size: 15px;
   font-family: 'Archivo-Bold';
   line-height: 19px;
`;

export const ProdutoInfoPreco = styled.Text`
   font-size: 15px;
   font-weight: bold;
   line-height: 19px;
`;

export const ProdutoInfoDestaque = styled.Text`
   color: #248;
   font-size: 22px;
   font-family: 'Roboto-Regular';
   margin-bottom: 25px;
`;

export const BotaoAdicionarVenda = styled.TouchableOpacity`
   width: 100%;
   padding: 6px;
   border: 1px solid ${Preto1};
   background-color: ${Branco3};
`;

export const BotaoAdicionarVendaTexto = styled.Text`
   color: ${Preto1};
   font-size: 13px;
   font-family: 'Archivo-Medium';
   text-align: center;
`;

export const Separador = styled.View`
   height: 17px;
`;
