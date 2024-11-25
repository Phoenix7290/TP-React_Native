import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import NewsListScreen from './components/NewsListScreen';

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <NewsListScreen />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
