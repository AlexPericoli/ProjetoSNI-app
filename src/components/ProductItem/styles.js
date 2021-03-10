import styled from 'styled-components/native';

const Preto1 = (props) => props.theme.preto_1;
const Branco2 = (props) => props.theme.branco_2;
const Branco3 = (props) => props.theme.branco_3;
const Cinza1 = (props) => props.theme.cinza_1;
const ListaProdutos_Nome = (props) => props.theme.produtos.nome_produto;
const ListaProdutos_Preco = (props) => props.theme.produtos.preco_produto;

export const Container = styled.View`
   background-color: ${Branco2};
   padding: 5px 4px 10px;
   border-radius: 10px;
   margin-bottom: 15px;
   border-bottom-color: ${Preto1};
`;

export const ProdItemTitle = styled.Text`
   color: ${ListaProdutos_Nome};
   font-size: 24px;
   font-family: 'Roboto-MediumItalic';
   padding-left: 5px;
   border-bottom-width: 1px;
   border-bottom-color: ${Preto1};
`;

export const ProdInfoDescricao = styled.Text`
   font-size: 15px;
   padding: 2px 4px;
`;

export const ProdItemInfo = styled.View`
   flex-direction: row;
   margin-top: 5px;
   border-bottom-width: 1px;
   border-bottom-color: ${Cinza1};
`;

export const InfoArea = styled.View`
   flex-direction: column;
   width: 64%;
   padding: 5px;
`;

export const ProdInfo = styled.Text`
   font-size: 17px;
   font-weight: bold;
`;

export const ProdInfoPreco = styled.View`
   flex: 1;
   justify-content: flex-end;
`;

export const ProdInfoPrecoText = styled.Text`
   color: ${ListaProdutos_Preco};
   font-size: 21px;
   font-weight: bold;
`;

export const FotoArea = styled.View`
   flex: 1;
   margin: 8px;
   margin-right: 25px;
   align-items: center;
   justify-content: center;
`;

export const FotoProduto = styled.Image`
   width: 120px;
   height: 150px;
`;

export const BotaoDetalhesArea = styled.View`
   margin-top: 9px;
`;

export const BotaoDetalhes = styled.TouchableOpacity`
   width: 50%;
   padding: 4px;
   align-items: center;
   border-radius: 8px;
   border: 2px solid ${Preto1};
   background-color: ${Branco3};
`;

export const BotaoDetalhesTexto = styled.Text`
   color: ${Preto1};
   font-size: 14px;
   font-family: 'Archivo-Bold';
`;
