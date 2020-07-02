import React, { Component } from 'react';
import {Text, View,TouchableHighlight,TextInput,TouchableOpacity, Button, Alert} from 'react-native'
import addexercice from '../css/style_addexercice'

export default class Addexercice extends Component{

    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            nbrSerie: '',
            nbrsec: ''
        };
    }
    valider_Form(){
        const{nombre,nbrSerie,nbrsec} = this.state
        if(nombre === '' || nbrSerie ==='' || nbrsec ===''){
            Alert.alert("un des champs est vide");
        }else{
            this.props.navigation.replace('Dashboard')
        }
    }

    render() {
        return(
            <View style={addexercice.container}>

            <View style={addexercice.container1}>
            <Text style={addexercice.texte}>Ajouter un exercice</Text>
            </View>

            <View style={addexercice.container2}>

            <Text style={addexercice.texte}>Pompes </Text>

                <View style={addexercice.input_back}>
                <TextInput 
                  placeholder="15"
                  placeholderTextColor="black"
                  style={addexercice.input_text}
                  onChangeText={(nombre) => {
                    this.setState({ nombre })
                  }}/>
                </View>

                <View style={addexercice.input_back}>
                <TextInput 
                  placeholder="5 séries"
                  placeholderTextColor="black"
                  style={addexercice.input_text}
                  onChangeText={(nbrSerie) => {
                    this.setState({ nbrSerie })
                  }}/>
                </View>

                <View style={addexercice.input_back}>
                <TextInput 
                  placeholder="5 Sec"
                  placeholderTextColor="black"
                  style={addexercice.input_text}
                  onChangeText={(nbrsec) => {
                    this.setState({ nbrsec })
                  }}/>
                </View>
              
            </View>

            <View style={addexercice.container3}>

             <View style={addexercice.alternativeLayoutButtonContainer}>

                <View style={addexercice.border_container}>
                    <TouchableOpacity style={addexercice.button} onPress={() => this.valider_Form()}>
                      <Text style={addexercice.text_button}> Continuer</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={addexercice.border_container}>
                    <TouchableOpacity style={addexercice.button} onPress={() => this.valider_Form()}>
                      <Text style={addexercice.text_button}>Terminer</Text>
                    </TouchableOpacity>
                  </View>

                </View>
                
            </View>

          </View>

        )
    }
      

}


