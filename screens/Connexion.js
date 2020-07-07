import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

import style_connexion from '../css/style_connexion'
import { MaterialIcons } from '@expo/vector-icons'

export default class Connexion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {}

  render() {
    const { navigation } = this.props
    return (
      <View style={style_connexion.container}>
        <View style={style_connexion.border_title}></View>
        <Text style={style_connexion.size_title}> Connexion</Text>
        <View style={style_connexion.border_icons}></View>
        <MaterialIcons name="account-circle" size={150} color="black" />
        <View style={style_connexion.border_input_1}></View>
        <View style={style_connexion.input_back}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={style_connexion.input_text}
            onChangeText={(email) => {
              this.setState({ email })
            }}
          />
        </View>
        <View style={style_connexion.border_input_2}></View>
        <View style={style_connexion.input_back}>
          <TextInput
            placeholder="Mot de passe"
            placeholderTextColor="black"
            secureTextEntry={true}
            style={style_connexion.input_text}
            onChangeText={(password) => {
              this.setState({ password })
            }}
          />
        </View>
        <View style={style_connexion.placement_btn_1}></View>
        <View style={style_connexion.border_btn_1}>
          <TouchableOpacity>
            <Text style={style_connexion.text_btn_1}> Se connecter</Text>
          </TouchableOpacity>
        </View>
        <View style={style_connexion.placement_btn_2}></View>

        <View style={style_connexion.border_btn_2}>
          <TouchableOpacity onPress={() => navigation.replace('Inscription')}>
            <Text style={style_connexion.text_btn_2}> S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
