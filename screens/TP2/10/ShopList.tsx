import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Products: undefined;
  ShopList: { shopListProducts: { id: number; name: string; price: number }[] };
};

type ShopListScreenRouteProp = RouteProp<RootStackParamList, 'ShopList'>;
type ShopListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ShopList'>;

type Props = {
  route: ShopListScreenRouteProp;
  navigation: ShopListScreenNavigationProp;
};

const ShopListScreen: React.FC<Props> = ({ route, navigation }) => {
  const { shopListProducts } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Carrinho de Compras</Text>
      {shopListProducts.length === 0 ? (
        <Text>O carrinho está vazio.</Text>
      ) : (
        shopListProducts.map((product, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>{product.name} - R${product.price}</Text>
          </View>
        ))
      )}
      <Button title="Limpar Carrinho" onPress={() => navigation.navigate('Products')} />
    </View>
  );
};

export default ShopListScreen;
