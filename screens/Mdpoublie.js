import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TextInput,Alert } from 'react-native'
import mdpreni from '../css/style_mdp'
import ProfilePicture from 'react-native-profile-picture'

export default class Mdpreni extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      confirpassword: ''
    }
  };

  valider_Form() {
    const { password, confirpassword } = this.state;
    if (password === '' || confirpassword === '') {
      Alert.alert('un des champs est vide')
    }else if(password !== confirpassword){
      Alert.alert('les mots de passe ne sont pas identique')
    }else{
      this.props.navigation.replace('Dashboard')
    }
  }

  render() {
    return (
      <View style={mdpreni.container}>

        <View style={mdpreni.container1}>
          <Text style={mdpreni.h2}>Rénitialisation du </Text>
          <Text style={mdpreni.h2}>mot de passe</Text>
            <View style={mdpreni.profilpicture}>
              <ProfilePicture
                isPicture={true}
                width={100}
                height={100}
                requirePicture={require('../assets/images/profil.jpg')}
                shape="circle"/>
            </View>
            
        </View>

        
        <View View style={mdpreni.container2}>
              <View style={mdpreni.input_back}>
                  <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="black"
                    style={mdpreni.input_text}
                    onChangeText={(password) => {
                      this.setState({ password })
                    }}/>
                </View>

                
               <View style={mdpreni.input_back}>
                  <TextInput
                    placeholder="Confimer mot de passe"
                    placeholderTextColor="black"
                    style={mdpreni.input_text}
                    onChangeText={(confirpassword) => {
                      this.setState({ confirpassword })
                    }}/>
                </View>
        </View>


        <View style={mdpreni.container3}>
          <View style={mdpreni.border_container}>
            <TouchableOpacity style={mdpreni.button} onPress={() => this.valider_Form()}>
              <Text style={mdpreni.text_button}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}
