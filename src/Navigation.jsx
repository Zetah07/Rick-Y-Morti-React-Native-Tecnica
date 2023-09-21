import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import SearchScreen from './screens/SearchScreen';


const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName='HomeScreen'>
      <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#1A1A1A",
          },
          headerTintColor: "#11B0C8",
          headerTitle: "",
        }}
      />
      <HomeStackNavigator.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: "#1A1A1A",
          },
          headerTintColor: "#11B0C8",
          headerTitle: "",
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs ()  {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#11B0C8",
        tabBarActiveBackgroundColor: "#1A1A1A",
        tabBarInactiveBackgroundColor: "#1A1A1A",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        component={MyStack}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
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