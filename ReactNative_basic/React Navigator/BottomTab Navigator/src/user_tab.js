import * as React from 'react'
import { View, Text, Button } from 'react-native';


function TabUserScreen({navigation}){

    return(
      <View>
        <Text>UserScreen</Text>
        <Button
            title="To HomeScreen"
            onPress={()=>{
                navigation.navigate('Home');
            }}
        />

      </View>
    )
}

export default TabUserScreen;