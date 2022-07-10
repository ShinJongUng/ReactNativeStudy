import React from 'react';
import {View, Text} from 'react-native';

const UserScreen = props => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  );
};

export default UserScreen;
