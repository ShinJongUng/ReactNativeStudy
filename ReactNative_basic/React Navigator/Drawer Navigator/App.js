import * as React from 'react';
import {StyleSheet, View, Text, Image, Button, Linking} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  CustomDrawerContent = (props) => {
    return(
      <DrawerContentScrollView {...props}>
        <DrawerItem 
          label ="Help"
          onPress={()=>Linking.openURL('http://www.google.com')}
        />
        <DrawerItem 
          label ="Info"
          onPress={()=>alert('info window')}
        />
      </DrawerContentScrollView>
    )
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={props=><this.CustomDrawerContent {...props}/>}>
        <Drawer.Screen name = "Home" component={DrawerHomeScreen}/>
        <Drawer.Screen name = "User" component={DrawerUserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
