import React from 'react';
import { StyleSheet, Button, View, TextInput, Text, FlatList, ScrollView, Image} from 'react-native';


export class Search extends React.Component{
    constructor(props) {
        super(props)
       
        this.state = {
            searchText: "",            
            textList: [

            ]
        }
    }
    
    saveText =(texte)=> {
        let textListCopy = this.state.textList
        textListCopy.push(texte)
        this.setState({
            textList: textListCopy, 
            searchText: ""
        })

    }


    render(){ 
        let textForFlatList =  this.state.textList.map((element, index)=>{
            return {
                key: index,
                textValue: element,
            }
        })

       
 
       
        return this.state.searchText === "Kangourou"?  (
                <View style={{flex:1, width: "100%",} }>
                    <View style={{maxHeight: 200, flex: 1} } >
                     <View style={{backgroundColor: "green", alignItems: "center"}}>
                     <Image style={{width: 200, height: 150, }} source={require('../../assets/kangourou.png' )}  />  
                      </View> 
                        <ScrollView  contentContainerStyle={{flex: 1}}>
                            <FlatList 
                                data={textForFlatList}   
                                renderItem={({item}) => 
                                    <View style={{flex: 1, flexDirection:"row", justifyContent:"center"}}>
                                        <Text>{item.key}{item.textValue}</Text>    
                                    </View>
                                }
                            
                            />
                        </ScrollView>
                    </View>         
                    <TextInput style={styles.textinput} placeholder= 'Titre du film' value={this.state.searchText} onChangeText= {(text) => this.setState({searchText: text})} />
                    <Button style={{height: 50}} title = "Entrer défie" onPress={() => {this.saveText(this.state.searchText)}}/>                  
                </View>
            ) : (
                <View style={{flex:1, width: "100%", justifyContent: "space-between"} }>
                <View style={{maxHeight: 200, flex: 1} } >
                    <ScrollView  contentContainerStyle={{flex: 1}}>
                        <FlatList 
                            data={textForFlatList}   
                            renderItem={({item}) => <View style={{flex: 1, flexDirection:"row", justifyContent:"flex-start"}}>
                                <Text>{item.key}{item.textValue}</Text>    
                            </View>
                            }
                        
                        />
                    </ScrollView>
                </View>         
                <TextInput style={styles.textinput} placeholder= 'Titre du film' value={this.state.searchText} onChangeText= {(text) => this.setState({searchText: text})} />
                <Button style={{height: 50}} title = "Entrer défie" onPress={() => {this.saveText(this.state.searchText)}}/>              
            </View>
            )
        
    }
}


const styles = StyleSheet.create({
    textinput: {
      
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      

    },
   
  })


  
    
