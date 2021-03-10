import React from 'react';
import {
   Container,
   AreaConsultas,
   Texto,
   ButtonArea,
   Botao,
   VendasArea,
   DataVenda,
   ProdTitle,
   InfoArea,
   InfoTexto,
   Separador,
} from './styles';

import TituloPagina from '../../components/TituloPagina';

export default function Consultas() {
   return (
      <Container>
         <TituloPagina corTexto="#fff" corFundo="#789" texto="Consultas" />
         <AreaConsultas />
         <ButtonArea>
            <Botao>
               <Texto>Hoje</Texto>
            </Botao>
            <Botao>
               <Texto>Mês atual</Texto>
            </Botao>
            <Botao>
               <Texto>Período</Texto>
            </Botao>
         </ButtonArea>
         <VendasArea>
            <DataVenda>29/09/2020 (Terça-feira)</DataVenda>
            <ProdTitle>A Verdade da vida vol. 35</ProdTitle>
            <InfoArea>
               <InfoTexto>R$ 32,90</InfoTexto>
               <InfoTexto>Qtd.: 01</InfoTexto>
            </InfoArea>
            <Separador />
            <ProdTitle>Preleções sobre a Sutra Sagrada</ProdTitle>
            <InfoArea>
               <InfoTexto>R$ 27,90</InfoTexto>
               <InfoTexto>Qtd.: 04</InfoTexto>
            </InfoArea>

            <DataVenda>06/10/2020 (Terça-feira)</DataVenda>
            <ProdTitle>Preceitos para leitura diária</ProdTitle>
            <InfoArea>
               <InfoTexto>R$ 14,90</InfoTexto>
               <InfoTexto>Qtd.: 01</InfoTexto>
            </InfoArea>
            <Separador />
            <ProdTitle>A sabedoria da vida cotidiana</ProdTitle>
            <InfoArea>
               <InfoTexto>R$ 27,90</InfoTexto>
               <InfoTexto>Qtd.: 04</InfoTexto>
            </InfoArea>
         </VendasArea>
      </Container>
   );
}
