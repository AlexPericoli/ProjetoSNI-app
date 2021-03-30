import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
   Container,
   AreaDetalhes,
   AreaInfoProduto,
   AreaInfo,
   AreaImagem,
   AreaVendas,
   AreaBotao,
   TextArea,
   ProdutoNome,
   ProdutoDescricao,
   ProdutoInfo,
   ProdutoInfoBold,
   ProdutoInfoPreco,
   ProdutoInfoDestaque,
   ProdutoImagem,
   VendasScroll,
   BotaoAdicionarVenda,
   BotaoAdicionarVendaTexto,
   Separador
} from './styles';

import Config from '../../../config/config';
import TituloPagina from '../../components/TituloPagina';

export default function DetalhesProd() {
   const route = useRoute();
   const dadosProduto = route.params.data;

   const { imagem } = dadosProduto;
   const image_url = `${Config.APP_URL}:8081/src/assets/produtos/${imagem}.jpg`;

   return (
      <Container>
         <TituloPagina
            corTexto={({ theme }) => theme.branco_1}
            corFundo={({ theme }) => theme.fundo_barra_titulo}
            texto="Detalhes do Produto"
         />
         <AreaDetalhes>
            <ProdutoNome>{dadosProduto.nome}</ProdutoNome>
            <AreaInfoProduto>
               <AreaImagem>
                  <ProdutoImagem source={{ uri: image_url }} />
               </AreaImagem>
               <AreaInfo>
                  <TextArea>
                     <ProdutoInfoBold>Autor:</ProdutoInfoBold>
                     <ProdutoInfo>{dadosProduto.descricao}</ProdutoInfo>
                     <Separador />
                     <ProdutoInfo>Vendas no mês: 10</ProdutoInfo>
                     <ProdutoInfo>Estoque: 07</ProdutoInfo>
                     <ProdutoInfoPreco>R$ {dadosProduto.valor.toFixed(2)}</ProdutoInfoPreco>
                  </TextArea>
                  <AreaBotao>
                     <BotaoAdicionarVenda>
                        <BotaoAdicionarVendaTexto>
                           Adicionar venda
                        </BotaoAdicionarVendaTexto>
                     </BotaoAdicionarVenda>
                  </AreaBotao>
               </AreaInfo>
            </AreaInfoProduto>
            {/*}
            <ProdutoDescricao>{dadosProduto.descricao}</ProdutoDescricao>
            {*/}
            <AreaVendas>
               <ProdutoDescricao>
                  Detalhes de vendas por horário
               </ProdutoDescricao>
               <VendasScroll>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade. 11/03/21{' '}19:21:00h
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade. 11/03/21{' '}19:21:00h
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade. 11/03/21{' '}19:21:00h
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade. 11/03/21{' '}19:21:00h
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade. 11/03/21{' '}19:21:00h
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade. 11/03/21{' '}19:21:00h
                  </ProdutoDescricao>
               </VendasScroll>
            </AreaVendas>
         </AreaDetalhes>
      </Container>
   );
}
