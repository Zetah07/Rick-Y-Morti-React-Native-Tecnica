import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import Search from './screens/Search';
import Favorites from './screens/Favorites';

const Tab = createBottomTabNavigator();

function MyTabs ()  {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Tab.Navigator>
  );
};
  
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}