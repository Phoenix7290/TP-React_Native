// App.tsx
import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { post: Post };
};

export interface Post {
  id: number;
  title: string;
  summary: string;
  likes: number;
  shares: number;
  content: string;
  author: string;
  date: string;
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Postagens' }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
