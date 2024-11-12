import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const ProductScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [shopListProducts, setShopListProducts] = useState<{ id: number; name: string; price: number; }[]>([]);

  const products = [
    { id: 1, name: 'Camiseta', price: 50 },
    { id: 2, name: 'Calça', price: 100 },
    { id: 3, name: 'Tênis', price: 150 },
  ];

  const shopListAdd = (product: { id: number; name: string; price: number; }) => {
    setShopListProducts([...shopListProducts, product]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Lista de products</Text>
      {products.map((product) => (
        <View key={product.id} style={{ marginBottom: 10 }}>
          <Text>{product.name} - R${product.price}</Text>
          <TouchableOpacity
            style={styles.botaoAdicionar}
            onPress={() => shopListAdd(product)}
          >
            <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.botaoVerCarrinho}
        onPress={() => navigation.navigate('Carrinho', { shopListProducts })}
      >
        <Text style={styles.textoBotao}>Ver Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  botaoAdicionar: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  botaoVerCarrinho: {
    backgroundColor: '#FF6347', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFF', 
    fontWeight: 'bold',
  },
});

export default ProductScreen;
