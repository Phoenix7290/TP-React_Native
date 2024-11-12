import React from 'react';
import { View } from 'react-native';
import Component from './components/index';

const App = () => {
  return (
    <View>
      <Component avatar="https://i.pinimg.com/736x/f5/6e/82/f56e82f61e7d95338b4183d4e348c025--nobunagas-ambition-samurai.jpg" name='Nobunaga' adress='Japão - JP' number='(99) 9 1234-1234'/>
      <Component avatar="https://th.bing.com/th/id/OIP.WiimiE_e52Ek-suZlLgZWwHaJP?rs=1&pid=ImgDetMain" name='Jakob' adress='Porto Alegre - RS' number='(11) 9 5678-9123'/>
      <Component avatar="https://th.bing.com/th/id/OIP.R6S1k1xJWDiQIusWM4LG0wHaLH?rs=1&pid=ImgDetMain" name='Lara' adress='São Paulo - SP' number='(21) 9 8765-4321'/>
    </View>
  );
};

export default App;
