import React from 'react';
import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screens/Home/index.tsx";
import TP1Stack from "./screens/Tabs/TP1Stack.tsx";
import TP2Stack from "./screens/Tabs/TP2Stack.tsx";
import TP3Stack from "./screens/Tabs/TP3Stack.tsx";

const tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={Home} />
      <tab.Screen name="TP1" component={TP1Stack} />
      <tab.Screen name="TP2" component={TP2Stack} />
      <tab.Screen name="TP3" component={TP3Stack} />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  );
}