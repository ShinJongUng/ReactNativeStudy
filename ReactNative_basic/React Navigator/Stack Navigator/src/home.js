import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: '여긴 홈 스크린입니다.',
            headerStyle:{
            },
            headerTintColor: 'yellow'
        })
    })
    return(
      <View>
        <Text>HomeScreen</Text>
        <Button
            title="To UserScreen"
            onPress={()=>{
                navigation.navigate('User', 
                    {
                        userIndex: 100,
                        userName: 'Gildong',
                        userLastName: 'Hong',
                    }
                );
            }}
        />
      </View>
    )
}

export default HomeScreen;