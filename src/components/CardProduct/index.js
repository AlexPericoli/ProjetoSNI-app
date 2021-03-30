import React from 'react';

import {
   Container,
   InfoArea,
   ProdInfo,
   FotoArea,
   FotoProduto,
   ProdItemTitle,
   CardBody,
   TextArea,
   ProdInfoDescricao,
   ProdInfoPreco,
   BotaoDetalhes,
   BotaoDetalhesArea,
   BotaoDetalhesTexto,
} from './styles';

import Config from '../../../config/config';

export default function CardProduct({ data, navigation }) {
   const { imagem } = data;
   const image_url = `${Config.APP_URL}:8081/src/assets/produtos/${imagem}.jpg`;

   return (
      <Container>
         <ProdItemTitle>{data.nome}</ProdItemTitle>
         <ProdInfoDescricao>{data.descricao}</ProdInfoDescricao>
         <CardBody>
            <FotoArea>
               <FotoProduto source={{ uri: image_url }} />
            </FotoArea>
            <InfoArea>
               <TextArea>
                  <ProdInfo>Vendas no mês: 10</ProdInfo>
                  <ProdInfo>Estoque: {data.qtd}</ProdInfo>
                  <ProdInfoPreco>R$ {data.valor.toFixed(2)}</ProdInfoPreco>
               </TextArea>

               <BotaoDetalhesArea>
                  <BotaoDetalhes
                     onPress={() =>
                        navigation.navigate('DetalhesProd', { data })
                     }>
                     <BotaoDetalhesTexto>Ver detalhes</BotaoDetalhesTexto>
                  </BotaoDetalhes>
               </BotaoDetalhesArea>

            </InfoArea>
         </CardBody>
      </Container>
   );
}
