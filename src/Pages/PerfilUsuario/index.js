import React from 'react';
import {
   Container,
   AreaPerfil,
   AreaImagem,
   AreaInfo,
   FotoPerfil,
   InfoNome,
   InfoFuncao,
   InfoRegional,
   Info,
   AreaBotao,
   BotaoVoltar,
   BotaoVoltarTexto,
} from './styles';

import TituloPagina from '../../components/TituloPagina';

export default function PerfilUsuario() {
   return (
      <Container>
         <TituloPagina
            corTexto={({ theme }) => theme.branco_1}
            corFundo={({ theme }) => theme.fundo_barra_titulo}
            texto="Perfil do Usuário"
         />
         <AreaPerfil>
            <AreaImagem>
               <FotoPerfil
                  source={require('../../assets/usuarios/rafael.jpg')}
               />
            </AreaImagem>
            <AreaInfo>
               <InfoNome>Rafael Bevilacqua</InfoNome>
               <InfoFuncao>Presidente da Fraternidade</InfoFuncao>
               <InfoRegional>Regional SP-Aricanduva</InfoRegional>
               <InfoRegional>Associação local Vila Carrão</InfoRegional>
               <InfoRegional>Praça Harold Daltro, 382</InfoRegional>
            </AreaInfo>
            <AreaBotao>
               <BotaoVoltar>
                  <BotaoVoltarTexto>{'<'} Voltar</BotaoVoltarTexto>
               </BotaoVoltar>
            </AreaBotao>
         </AreaPerfil>
      </Container>
   );
}
