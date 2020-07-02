import React, { Component } from 'react';
import {Text, View,TouchableHighlight,Dimensions, Button} from 'react-native'
import choixexercice from '../css/style_choixexercice'

export default class Choixexercice extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
         
        };
    
    }

    render() {
        return(
            <View style={choixexercice.container}>

            <View style={choixexercice.container1}>
              
            </View>

            <View style={choixexercice.container2}>
              
            </View>

            <View style={choixexercice.container3}>
              
            </View>


            </View>

        )
    }
      

}


