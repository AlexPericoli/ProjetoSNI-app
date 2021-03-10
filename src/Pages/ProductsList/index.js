import React from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import TituloPagina from '../../components/TituloPagina';
import ProductItem from '../../components/ProductItem';

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
   const navigation = useNavigation();

   const [productsFlatList, setProductsFlatList] = React.useState([]);
   const [listaCategorias, setListaCategorias] = React.useState([]);
   const [categoriaAtiva, setCategoriaAtiva] = React.useState(0);

   React.useEffect(() => {
      carregaCategorias();
      carregaProdutos(1);
   }, []);

   async function carregaCategorias() {
      const categorias = await api.get('/categorias');
      setListaCategorias(categorias.data);
   }

   async function carregaProdutos(categoria) {
      const produtos = await api.get('produtos', { params: { categoria } });
      setProductsFlatList(produtos.data);
      setCategoriaAtiva(categoria);
   }

   return (
      <Container>
         <TituloPagina corTexto="#fff" corFundo="#241" texto="Produtos" />
         <CommandArea>
            <CategoriasTitulo>Categorias</CategoriasTitulo>
            <CategoriasProduto
               horizontal={true}
               contentContainerStyle={{ paddingVertical: 10 }}>
               {listaCategorias.map((item, index) => {
                  return (
                     <CategoriaItemButton
                        key={item.id}
                        onPress={() => carregaProdutos(item.id)}
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
               keyExtractor={(product) => String(product.id)}
               renderItem={({ item }) => (
                  <ProductItem data={item} navigation={navigation} />
               )}
            />
         </ProductsArea>
      </Container>
   );
}
