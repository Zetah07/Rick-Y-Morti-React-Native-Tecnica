import React, { useState } from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import Search from './screens/Search';
import Favorites from './screens/Favorites';


const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  const [favorites, setFavorites] = useState([]);

  return (
    <HomeStackNavigator.Navigator initialRouteName='HomeScreen'>
      <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ favorites, setFavorites }}
      />
      <HomeStackNavigator.Screen
        name="Detail"
        component={CharacterDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#1A1A1A",
          },
          headerTintColor: "#11B0C8",
          headerTitle: "",
          }}
          initialParams={{ favorites, setFavorites }}
      />
      <HomeStackNavigator.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: {
            backgroundColor: "#1A1A1A",
          },
          headerTintColor: "#11B0C8",
          headerTitle: "",
          }}
          initialParams={{ favorites, setFavorites }}
      />
      <HomeStackNavigator.Screen
        name="Favorites"
        component={Favorites}
          initialParams={{ favorites, setFavorites }}
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
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          }}
        />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          // tabBarBadge: isFavorite.length > 0 ? isFavorite.length : null,
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