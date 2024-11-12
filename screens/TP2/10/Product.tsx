import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Products: undefined;
  ShopList: { shopListProducts: { id: number; name: string; price: number }[] };
};

type ProductsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Products'>;

type Props = {
  navigation: ProductsScreenNavigationProp;
};

const ProductsScreen: React.FC<Props> = ({ navigation }) => {
  const [shopListProducts, setShopListProducts] = useState<{ id: number; name: string; price: number }[]>([]);

  const products = [
    { id: 1, name: 'Camiseta', price: 50 },
    { id: 2, name: 'Calça', price: 100 },
    { id: 3, name: 'Tênis', price: 150 },
  ];

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setShopListProducts([...shopListProducts, product]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Lista de Produtos</Text>
      {products.map((product) => (
        <View key={product.id} style={{ marginBottom: 10 }}>
          <Text>{product.name} - R${product.price}</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('ShopList', { shopListProducts })}
      >
        <Text style={styles.buttonText}>Ver Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  cartButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
