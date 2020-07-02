import React, { Component } from 'react';
import {Text, View,TouchableHighlight,Dimensions, Button,TouchableOpacity} from 'react-native'
import ajoutexercice from '../css/style_ajoutexercice'

export default class Ajoutexercice extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
         
        };
    
    }

    navigation(){
        this.props.navigation.replace('Dashboard')
    }

    render() {

        return(
            <View style={ajoutexercice.container}>

            <View style={ajoutexercice.container1}>
              
            </View>

            <View style={ajoutexercice.container2}>
              <Text style={ajoutexercice.texte}>Quel muscle ?</Text>

              <View style={ajoutexercice.border_container}>
                    <TouchableOpacity style={ajoutexercice.button}
                    onPress={() => this.navigation()}>
                    <Text style={ajoutexercice.text_button}>Biceps</Text>
                    </TouchableOpacity>
              </View>
              
              <View style={ajoutexercice.border_container}>
                    <TouchableOpacity style={ajoutexercice.button}
                    onPress={() => this.navigation()}>
                    <Text style={ajoutexercice.text_button}>Triceps</Text>
                    </TouchableOpacity>
              </View>

              <View style={ajoutexercice.border_container}>
                    <TouchableOpacity style={ajoutexercice.button}
                    onPress={() => this.navigation()}>
                    <Text style={ajoutexercice.text_button}>Pectoraux</Text>
                    </TouchableOpacity>
              </View>

              <View style={ajoutexercice.border_container}>
                    <TouchableOpacity style={ajoutexercice.button}
                    onPress={() => this.navigation()}>
                    <Text style={ajoutexercice.text_button}>Fessiers</Text>
                    </TouchableOpacity>
              </View>
              <View style={ajoutexercice.border_container}>
                    <TouchableOpacity style={ajoutexercice.button}
                    onPress={() => this.navigation()}>
                    <Text style={ajoutexercice.text_button}>Mollets</Text>
                    </TouchableOpacity>
              </View>
              
            </View>

            <View style={ajoutexercice.container3}>
              
            </View>


            </View>

        )
    }
      

}


