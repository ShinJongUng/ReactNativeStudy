import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DrawerHomeScreen({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: '여긴 홈 스크린입니다.',
        })
    })
    return(
      <View>
        <Text>HomeScreen</Text>
        <Button
            title="To UserScreen"
            onPress={()=>{
                navigation.navigate('User');
            }}
        />
      </View>
    )
}

export default DrawerHomeScreen;