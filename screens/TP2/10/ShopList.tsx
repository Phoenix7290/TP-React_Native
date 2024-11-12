
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';


interface Props {
  route: {
    params: {
      shopListProducts: { nome: string; preco: number }[];
    };
  };
  navigation: NavigationProp<any>;
}

const TelaCarrinho = ({ route, navigation }: Props) => {
  const { shopListProducts } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Carrinho de Compras</Text>
      {shopListProducts.length === 0 ? (
        <Text>O carrinho está vazio.</Text>
      ) : (
        shopListProducts.map((produto, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>{produto.nome} - R${produto.preco}</Text>
          </View>
        ))
      )}
      <Button
        title="Limpar Carrinho"
        onPress={() => navigation.navigate('Produtos')}
      />
    </View>
  );
};

export default TelaCarrinho;
