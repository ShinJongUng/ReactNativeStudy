import * as React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'brown',
          },
          headerTintColor: 'yellow',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerTitle: () => (
              <Image
                style={{width: 40, height: 40}}
                source={require('./src/assets/pics/home_icon.png')}
              />
            ),
            headerRight: ()=>(
              <Button 
              title ="Info"
              onPress={()=>alert("Button Pressed")}/>
            )
          }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          initialParams={{
            userIndex: 50,
            userName: 'Gildong',
            userLastName: 'Ung',
          }}
          options={{title: 'User Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
