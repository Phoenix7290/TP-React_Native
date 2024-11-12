import React from 'react';
import Component from './components/index';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Component text1='Item A' text2='Item B' text3='Item C' text4='Item D'/>
    </View>
  );
};

export default App;
