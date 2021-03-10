import styled from 'styled-components/native';

const FundoPadrao = (props) => props.theme.fundo_padrao;
const Preto1 = (props) => props.theme.preto_1;
const ListaProdutos_BotaoCategoria = (props) =>
   props.theme.produtos.botao_categoria;

export const Container = styled.View`
   flex: 1;
   align-items: center;
   background-color: ${FundoPadrao};
`;

export const CommandArea = styled.View`
   margin-top: 15px;
   width: 95%;
`;

export const CategoriasTitulo = styled.Text`
   color: ${Preto1};
   font-size: 17px;
`;

export const CategoriasProduto = styled.ScrollView`
   width: 100%;
   padding: 0 10px;
`;

export const CategoriaItemButton = styled.TouchableOpacity`
   padding: 4px 7px;
   margin-right: 13px;
   border-radius: 6px;
   border: 2px solid ${ListaProdutos_BotaoCategoria};
   background-color: ${(props) => props.active};
`;

export const CategoriaItemText = styled.Text`
   color: ${ListaProdutos_BotaoCategoria};
   font-weight: bold;
`;

export const ProductsArea = styled.View`
   width: 95%;
   height: 80%;
   margin-top: 20px;
`;

export const ProductList = styled.FlatList`
   padding: 7px 10px;
   margin-bottom: 70px;
`;
