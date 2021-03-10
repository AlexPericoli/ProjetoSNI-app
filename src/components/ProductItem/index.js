import React from 'react';

import {
   Container,
   InfoArea,
   ProdInfo,
   FotoArea,
   FotoProduto,
   ProdItemTitle,
   ProdItemInfo,
   ProdInfoDescricao,
   ProdInfoPreco,
   ProdInfoPrecoText,
   BotaoDetalhes,
   BotaoDetalhesArea,
   BotaoDetalhesTexto,
} from './styles';

import Config from '../../../config/config';

export default function ProductItem({ data, navigation }) {
   const { imagem } = data;
   const image_url = `${Config.APP_URL}:8081/src/assets/produtos/${imagem}.jpg`;

   return (
      <Container>
         <ProdItemTitle>{data.nome}</ProdItemTitle>
         <ProdInfoDescricao>{data.descricao}</ProdInfoDescricao>
         <ProdItemInfo>
            <InfoArea>
               <ProdInfo>Vendas no mês: 10</ProdInfo>
               <ProdInfo>Estoque: 07</ProdInfo>
               <BotaoDetalhesArea>
                  <BotaoDetalhes
                     onPress={() =>
                        navigation.navigate('DetalhesProd', { data })
                     }>
                     <BotaoDetalhesTexto>Detalhes</BotaoDetalhesTexto>
                  </BotaoDetalhes>
               </BotaoDetalhesArea>
               <ProdInfoPreco>
                  <ProdInfoPrecoText>R$ {data.valor},00</ProdInfoPrecoText>
               </ProdInfoPreco>
            </InfoArea>
            <FotoArea>
               <FotoProduto source={{ uri: image_url }} />
            </FotoArea>
         </ProdItemInfo>
      </Container>
   );
}
