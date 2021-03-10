import React from 'react';
import { TituloArea, TituloIcone, TituloTexto } from './styles';

export default function TituloPagina({ corTexto, corFundo, texto }) {
   return (
      <TituloArea corFundo={corFundo}>
         {/*}
      <TitleIcon source={require('../../assets/icones/livros.png')} />
      {*/}
         <TituloTexto corTexto={corTexto}>{texto}</TituloTexto>
      </TituloArea>
   );
}
