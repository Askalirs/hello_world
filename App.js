import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class App extends React.Component{
  render (){
  let pic = {uri:"hello_world/assets/edouard-philippe-le-defi-que-ses-trois-enfants-veulent-le-voir-relever.jpg"}

    
    return (<View style={styles.container}>
      <Text> j'aime pas les moches </Text>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <View style={styles.rond}></View>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rond: {
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    backgroundColor: "red",

  }
});