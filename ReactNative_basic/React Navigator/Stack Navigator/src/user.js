import * as React from 'react'
import { View, Text, Button } from 'react-native';


function UserScreen({navigation, route}){

    const {params} = route;
    const userIndex = params ? params.userIndex : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;

    console.log(params)
    return(
      <View>
        <Text>UserScreen</Text>
        <Button
            title="To HomeScreen"
            onPress={()=>{
                navigation.navigate('Home');
            }}
        />

        <Text>User index: {JSON.stringify(userIndex)}</Text>
        <Text>User Name: {JSON.stringify(userName)}</Text>
        <Text>User LastName: {JSON.stringify(userLastName)}</Text>

      </View>
    )
}

export default UserScreen;