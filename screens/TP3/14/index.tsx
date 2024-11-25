import React, { useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import AgreedScreen from './screens/Agreed';
import DisagreedScreen from './screens/Disagreed';

const Tab = createBottomTabNavigator();

export default function App() {
  const [propositions, setPropositions] = useState([]);
  const [userResponses, setUserResponses] = useState({});

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Proposições">
            {() => (
              <HomeScreen
                propositions={propositions}
                setPropositions={setPropositions}
                userResponses={userResponses}
                setUserResponses={setUserResponses}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Concordei">
            {() => (
              <AgreedScreen
                propositions={propositions}
                userResponses={userResponses}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Discordei">
            {() => (
              <DisagreedScreen
                propositions={propositions}
                userResponses={userResponses}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}