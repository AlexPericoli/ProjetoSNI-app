import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex: 1;
   background-color: #ddd;
`;

export const AreaConsultas = styled.View`
   width: 97%;
   margin-top: 20px;
`;

export const Title = styled.Text`
   font-size: 17px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 15px;
`;

export const Texto = styled.Text`
   color: #fff;
   text-align: center;
`;

export const ButtonArea = styled.View`
   padding: 8px 10px;
   flex-direction: row;
   justify-content: space-between;
   background-color: #082;
`;

export const Botao = styled.TouchableOpacity`
   width: 90px;
   padding: 4px;
   border-radius: 10px;
   border: 1px solid #fff;
`;

export const VendasArea = styled.View``;

export const DataVenda = styled.Text`
   color: #fff;
   background-color: #218;
   padding: 5px 8px;
   margin-top: 30px;
   margin-bottom: 5px;
   font-size: 18px;
   font-weight: bold;
`;

export const ProdTitle = styled.Text`
   padding: 0 6px;
   font-size: 18px;
   font-weight: bold;
`;

export const InfoArea = styled.View`
   padding: 0 6px;
   flex-direction: row;
   justify-content: space-between;
`;

export const InfoTexto = styled.Text``;

export const Separador = styled.View`
   width: 100%;
   height: 1px;
   margin-top: 11px;
   border: 1px solid #bbb;
`;
