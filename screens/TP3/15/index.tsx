import React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import BookDetails from "./screens/BookDetails";
import Inventory from "./screens/Inventory";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Details" component={BookDetails} />
                    <Stack.Screen name="Inventory" component={Inventory} />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}
