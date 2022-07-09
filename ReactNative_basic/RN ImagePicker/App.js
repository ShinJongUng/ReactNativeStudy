import React, {Component, useState} from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


function App(){
  const [avatar, changeAvatar] = useState('')

  addImage = () =>{
    launchCamera({}, response =>{
      changeAvatar(response.uri)
      console.log(response)
    })
  }

  return(
    <View style={styles.container}>
      <Text>Hello</Text>
      <Image 
        source={{uri:avatar}}
        style={styles.avatar}
      />

      <Button 
        title="Add an Image"
        onPress={()=>addImage()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26'
  },
  avatar:{
    width:'100%',
    height: 400
  }
})


export default App;