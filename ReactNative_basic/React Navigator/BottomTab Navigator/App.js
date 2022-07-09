import * as React from 'react';
import {StyleSheet, View, Text, Image, Button, Linking} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='User'
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red'
        }}
      >
        <Tab.Screen name="Home" component={TabHomeScreen} />
        <Tab.Screen name="User" component={TabUserScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
