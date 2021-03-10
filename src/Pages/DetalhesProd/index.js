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
   ProdutoNome,
   ProdutoDescricao,
   ProdutoInfo,
   ProdutoInfoDestaque,
   ProdutoImagem,
   VendasScroll,
   BotaoAdicionarVenda,
   BotaoAdicionarVendaTexto,
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
                  <ProdutoInfoDestaque>Vendas hoje: 16</ProdutoInfoDestaque>
                  <ProdutoInfo>Vendas no mês: 94</ProdutoInfo>
                  <ProdutoInfo>Em estoque: 03</ProdutoInfo>
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
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        19:21:00h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        02
                     </ProdutoDescricao>{' '}
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        19:21:00h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        03
                     </ProdutoDescricao>{' '}
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        19:21:00h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        04
                     </ProdutoDescricao>{' '}
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        20:49:16h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        03
                     </ProdutoDescricao>{' '}
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        20:49:16h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        02
                     </ProdutoDescricao>{' '}
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        20:49:16h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
                  <ProdutoDescricao>
                     -{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        01
                     </ProdutoDescricao>{' '}
                     unidade(s) às{' '}
                     <ProdutoDescricao style={{ fontWeight: 'bold' }}>
                        20:49:16h
                     </ProdutoDescricao>
                  </ProdutoDescricao>
               </VendasScroll>
            </AreaVendas>
         </AreaDetalhes>
      </Container>
   );
}
