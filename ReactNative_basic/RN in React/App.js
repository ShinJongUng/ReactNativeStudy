import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild';

class App extends Component{

  state ={
    sampleText: 'Hello World',
    sampleBool: true,
    sampleNum: 1
  }

  inputText =() => (
    this.state.sampleBool ? <Text>sampleBool is True</Text>: <Text>sampleBool is False</Text>
  )
  
  changeState = () =>{
    if(!this.state.sampleBool){
      this.setState({
        sampleText: 'Text Changed!!',
        sampleBool: true
      })
    }
    else{
    this.setState({
      sampleText: 'Helloworld',
      sampleBool: false
    })
    }
  }

  onAdd = () =>{
    this.setState(prevState =>{
      return{
        sampleNum: prevState.sampleNum + 1
      }
    })
  }

  render(){
    return(
      <View style={styles.background}>
        <Text onPress={this.changeState}>{this.state.sampleText}</Text>
        {this.inputText()}
        <Text onPress={this.onAdd}>{this.state.sampleNum}</Text>
        <PropsChild sampleText={this.state.sampleText} changeState={this.changeState}/>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
