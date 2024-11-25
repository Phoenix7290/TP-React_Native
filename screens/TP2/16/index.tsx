
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Perfil from './Perfil.jsx';
import FeedContatos from './FeedContacts.tsx';
import MinhasViagens from './MyTravels.tsx';
import Amigos from './Friends.tsx';
import Configuracoes from './Config.tsx';
// import DetalhesPostagem from './DetalhesPostagem.jsx';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Drawer.Navigator>
          {/* <Drawer.Screen name="Perfil" component={Perfil} /> */}
          <Drawer.Screen name="Feed de Viagens" component={FeedContatos} />
          <Drawer.Screen name="Minhas Viagens" component={MinhasViagens} />
          <Drawer.Screen name="Amigos" component={Amigos} />
          <Drawer.Screen name="Configurações" component={Configuracoes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
