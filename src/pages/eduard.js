import React, {Component} from 'react';
import { Button, Image, View} from 'react-native';

export class Eduard extends Component {
    constructor(props) {
        super(props)
       this.state = {
           showImage: false
       }

    }
    
    toggleImage=()=>{
        this.setState({
         showImage: !this.stateshowImage

        })
    }
    
    render() {
        console.log('render')
        if (this.state.showImage) {
            return (
                <View>
                    <Image source={require('../../assets/edouard-philippe-le-defi-que-ses-trois-enfants-veulent-le-voir-relever.jpg')} style={{width: 193, height: 110}}/>
                    <Button
                        onPress={this.toggleImage}
                        title="Eduard"
                        color="#841584"
                    /> 
                </View>
            )
        } else {
            return ( 
                <View>
                    <Button
                        onPress={this.toggleImage}
                        title="Eduard"
                        color="#841584"
                    /> 
                </View>
            )
        }    
    }
}
