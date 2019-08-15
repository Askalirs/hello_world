import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Eduard} from "./src/pages/eduard.js";
import {Search} from "./src/components/Search.js";

export default class App extends Component{
  render (){
    
    return (
      <View style={styles.container}>
        <Text> j'aime pas les moches  </Text>
        <Search/>
        <Eduard/> 
        
        <View style={styles.rond}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  rond: {
    width: 30, 
    height: 30, 
    borderRadius: 1, 
    backgroundColor: "red",

  }

});
