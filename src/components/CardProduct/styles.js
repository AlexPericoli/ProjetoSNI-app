import styled from 'styled-components/native';

const Preto1 = (props) => props.theme.preto_1;
const Branco2 = (props) => props.theme.branco_2;
const Branco3 = (props) => props.theme.branco_3;
const Cinza1 = (props) => props.theme.cinza_1;
const ListaProdutos_Nome = (props) => props.theme.produtos.nome_produto;
const ListaProdutos_Preco = (props) => props.theme.produtos.preco_produto;

export const Container = styled.View`
   background-color: #eed;
   padding: 6px 9px 10px;
   border-radius: 10px;
   margin-bottom: 15px;
   border-bottom-color: ${Preto1};
`;

export const ProdItemTitle = styled.Text`
   color: ${ListaProdutos_Nome};
   font-size: 17px;
   font-family: 'Roboto-Medium';
   line-height: 20px;
   letter-spacing: .7px;
   text-transform: uppercase;
   border-bottom-width: 1px;
   border-bottom-color: ${Preto1};
`;

export const ProdInfoDescricao = styled.Text`
   font-size: 15px;
`;

export const CardBody = styled.View`
   flex-direction: row;
   margin-top: 6px;
   padding-bottom: 6px;
   border-bottom-width: 1px;
   border-bottom-color: ${Cinza1};
`;

export const InfoArea = styled.View`
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;

   width: 52%;
`;

export const TextArea = styled.View``;

export const ProdInfo = styled.Text`
   font-size: 15px;
   font-family: 'Archivo';
   line-height: 19px;
`;

export const ProdInfoPreco = styled.Text`
   font-size: 15px;
   font-weight: bold;
   line-height: 19px;
`;

export const FotoArea = styled.View`
   flex: 1;
   align-items: flex-start;
   justify-content: flex-start;

   width: 135px;
   height: 175px;
`;

export const FotoProduto = styled.Image`
   width: 130px;
   height: 175px;
   border-width: 1px;
   border-color: #000;
`;

export const BotaoDetalhesArea = styled.View`
   width: 100%;
   margin-top: 9px;
`;

export const BotaoDetalhes = styled.TouchableOpacity`
   padding: 4px;
   border: 1px solid ${Preto1};
   background-color: ${Branco3};
`;

export const BotaoDetalhesTexto = styled.Text`
   color: ${Preto1};
   font-size: 13px;
   font-family: 'Archivo-Medium';
   text-align: center;
`;
