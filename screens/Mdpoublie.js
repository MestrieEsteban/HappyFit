import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TextInput,Alert } from 'react-native'
import mdpoublie from '../css/style_mdpoublie'
import ProfilePicture from 'react-native-profile-picture'

export default class Mdpreni extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
    }
  };

  valider_Form() {
    const { password } = this.state;
    if (password === '') {
      Alert.alert('un des champs est vide')
    }else{
      this.props.navigation.replace('Dashboard')
    }
  }

  render() {
    return (
      <View style={mdpoublie.container}>

        <View style={mdpoublie.container1}>
          <Text style={mdpoublie.h2}>Mot de passe </Text>
          <Text style={mdpoublie.h2}>Oublié</Text>
            <View style={mdpoublie.profilpicture}>
              <ProfilePicture
                isPicture={true}
                width={100}
                height={100}
                requirePicture={require('../assets/images/profil.jpg')}
                shape="circle"/>
            </View>
            
        </View>

        
        <View View style={mdpoublie.container2}>
            <View style={mdpoublie.input}>
              <View style={mdpoublie.input_back}>
                  <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="black"
                    style={mdpoublie.input_text}
                    onChangeText={(password) => {
                      this.setState({ password })
                    }}/>
                </View>

            </View> 
                <View style={mdpoublie.border_container}>
                  <TouchableOpacity style={mdpoublie.button} onPress={() => this.valider_Form()}>
                    <Text style={mdpoublie.text_button}>Envoyer</Text>
                  </TouchableOpacity>
                </View>
        </View>
      </View>
    )
  }
}
