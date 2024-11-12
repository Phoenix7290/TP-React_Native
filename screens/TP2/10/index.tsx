import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Products from './Product';
import ShopList from './ShopList';

type RootStackParamList = {
  Products: undefined;
  ShopList: { shopListProducts: { id: number; name: string; price: number }[] };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={Products} options={{ title: 'Lista de Produtos' }} />
      <Stack.Screen name="ShopList" component={ShopList} options={{ title: 'Carrinho de Compras' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
