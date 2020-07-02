import React, { Component } from 'react';
import {Text, View,TextInput,TouchableHighlight,TouchableOpacity, Button, Alert} from 'react-native'
import suiveseance from '../css/style_suiveseance'

export default class Suiveseance extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
         nombre: '' 
        };
    }

    valide_Number() {
        const{nombre} = this.state

        if(nombre === ''){
            Alert.alert("le champs des vide");
        }else{
            this.props.navigation.replace('Dashboard')
        }
    }

    continuer() {
        this.props.navigation.replace('Dashboard')
    }
    

    render() {
        return(
            <View style={suiveseance.container}>

            <View style={suiveseance.container1}>
            </View>

            <View style={suiveseance.container2}>
                <Text style={suiveseance.texte}> Ma séance</Text>

                <View style={suiveseance.input_back}>
                <TextInput 
                  placeholder="Nombre réel"
                  placeholderTextColor="black"
                  style={suiveseance.input_text}
                  onChangeText={(nombre) => {
                    this.setState({ nombre })
                  }}/>
              </View>

              <View style={suiveseance.border_container}>
                <TouchableOpacity style={suiveseance.button}
                onPress={() => this.valide_Number()}
                >
                  <Text style={suiveseance.text_button}
                  onPress={() => this.continuer()}
                  >Continuer</Text>
                </TouchableOpacity>
              </View>

              <View style={suiveseance.border_container}>
                <TouchableOpacity style={suiveseance.button2}>
                  <Text style={suiveseance.text_button2}>Sauter l'exercices</Text>
                </TouchableOpacity>
              </View>
                
            </View>


            <View style={suiveseance.container3}>
              
            </View>


            </View>

        )
    }
      

}


