import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import TituloPagina from '../../components/TituloPagina';
import CardProduct from '../../components/CardProduct';

import {
   Container,
   CategoriasTitulo,
   CategoriaItemButton,
   CategoriaItemText,
   CommandArea,
   CategoriasProduto,
   ProductsArea,
   ProductList,
} from './styles';

export default function ProductsList() {
   const token = useSelector((state) => state.usuarios.token);
   const navigation = useNavigation();

   const [productsFlatList, setProductsFlatList] = React.useState([]);
   const [listaCategorias, setListaCategorias] = React.useState([]);
   const [categoriaAtiva, setCategoriaAtiva] = React.useState(0);

   React.useEffect(() => {
      carregaCategorias();
      carregaProdutos(1, 4);
   }, []);

   async function carregaCategorias() {
      let headers = { 'Content-Type': 'application/json' };
      if (token) {
         headers.Authorization = `Bearer ${token}`;
      }

      const categorias = await api.get('categorias', { headers });
      setListaCategorias(categorias.data);
   }

   async function carregaProdutos(id_categoria, id_al) {
      const produtos = await api.get(`produtos/${id_categoria}/${id_al}`);
      setProductsFlatList(produtos.data);
      setCategoriaAtiva(id_categoria);
   }

   return (
      <Container>
         <TituloPagina corTexto="#fff" corFundo="#241" texto="Produtos" />
         <CommandArea>
            <CategoriasTitulo>Categorias</CategoriasTitulo>
            <CategoriasProduto
               horizontal={true}
               contentContainerStyle={{ paddingVertical: 4 }}>
               {listaCategorias.map((item, index) => {
                  return (
                     <CategoriaItemButton
                        key={index}
                        onPress={() => carregaProdutos(item.id, 4)}
                        active={categoriaAtiva === item.id ? '#d81' : '#ddc'}>
                        <CategoriaItemText>{item.descricao}</CategoriaItemText>
                     </CategoriaItemButton>
                  );
               })}
            </CategoriasProduto>
         </CommandArea>
         <ProductsArea>
            <ProductList
               data={productsFlatList}
               //keyExtractor={(product) => String(product.id)}
               renderItem={({ item }) => (
                  <CardProduct data={item} navigation={navigation} />
               )}
            />
         </ProductsArea>
      </Container>
   );
}
