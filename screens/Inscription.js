import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TextInput,Alert, CheckBox} from 'react-native'
import inscription from '../css/style_inscription'
import ProfilePicture from 'react-native-profile-picture'

export default class Inscription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      confirpassword: '',
      select:'',
      isSelected:'',
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
        <View style={inscription.container}>

          <View style={inscription.container1}>
            <Text style={inscription.h2}>Inscription</Text>
            <View style={inscription.profilpicture}>
              <ProfilePicture
                  isPicture={true}
                  width={100}
                  height={100}
                  requirePicture={require('../assets/images/profil.jpg')}
                  shape="circle"/>
            </View>

          </View>


          <View View style={inscription.container2}>
            <View style={inscription.input}>

              <View style={inscription.input_back}>
                <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="black"
                    style={inscription.input_text}
                    onChangeText={(password) => {
                      this.setState({ password })
                    }}/>
              </View>

              <View style={inscription.input_back}>
                <TextInput
                    placeholder="Confimer mot de passe"
                    placeholderTextColor="black"
                    style={inscription.input_text}
                    onChangeText={(confirpassword) => {
                      this.setState({ confirpassword })
                    }}/>
              </View>
              <View style={inscription.checkboxContainer}>
                <CheckBox

                    onChangeText={(isSelected) => {
                      this.setState({ isSelected }) }}
                    style={inscription.checkbox}
                />
              </View>

              <Text style={inscription.label}>Acepter les conditions d'utilisations </Text>

            </View>
            <View >
              <TouchableOpacity style={inscription.button} onPress={() => this.valider_Form()}>
                <Text style={inscription.text_button}>S'inscrire</Text>
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity style={inscription.button} onPress={() => this.props.navigation.navigate('Profil')}>
                <Text style={inscription.text_button}>Se connecter</Text>
              </TouchableOpacity>
            </View>

          </View>





        </View>
    )
  }
}