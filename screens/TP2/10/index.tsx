
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaProdutos from './Product.jsx';
import TelaCarrinho from './ShopList.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          name="Products"
          component={TelaProdutos}
          options={{ title: 'Lista de Produtos' }}
        />
        <Stack.Screen
          name="ShopList"
          component={TelaCarrinho}
          options={{ title: 'Carrinho de Compras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
