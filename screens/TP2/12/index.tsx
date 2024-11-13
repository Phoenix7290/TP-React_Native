import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import AcademicInfoScreen from './screens/AcademicInfoScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import SkillsScreen from './screens/SkillsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // it works separately not together.
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Personal Info" component={PersonalInfoScreen} />
        <Drawer.Screen name="Academic Info" component={AcademicInfoScreen} />
        <Drawer.Screen name="Experience" component={ExperienceScreen} />
        <Drawer.Screen name="Skills" component={SkillsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
