import React from 'react';
import { useSelector } from 'react-redux';
import { TituloArea, SubTitulo, TituloIcone, TituloTexto } from './styles';

export default function TituloPagina({ corTexto, corFundo, texto }) {
   const nome = useSelector((state) => state.usuarios.nome);
   const nome_al = useSelector((state) => state.usuarios.nome_assoc_local);
   const nome_funcao = useSelector((state) => state.usuarios.nome_funcao);

   return (
      <TituloArea corFundo={corFundo}>
         <TituloTexto corTexto={corTexto}>{texto}</TituloTexto>
         <SubTitulo>{nome_funcao } {nome}</SubTitulo>
         <SubTitulo>Núcleo {nome_al}</SubTitulo>
      </TituloArea>
   );
}
