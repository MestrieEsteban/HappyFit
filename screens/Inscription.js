import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import CheckBox from 'react-native-checkbox-component'

import { MaterialIcons } from '@expo/vector-icons'
import style_connexion from '../css/style_connexion'

export default class Connexion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      checked: false,
    }
  }

  componentDidMount() {}

  setChecked() {
    if (!this.state.checked) {
      this.setState({ checked: true })
    } else {
      this.setState({ checked: false })
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={style_connexion.container}>
        <View style={style_connexion.border_title}></View>
        <Text style={style_connexion.size_title}> Inscription</Text>
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
        <View style={style_connexion.border_checkbox}></View>
        <View style={style_connexion.placement_check_box}>
          <CheckBox
            checkedCheckBoxColor={'black'}
            rightText={"Accepter les conditions d'utilisations"}
            isChecked={this.state.checked}
            onClick={() => this.setChecked()}
          />
        </View>
        <View style={style_connexion.placement_btn_1}></View>
        <View style={style_connexion.border_btn_1}>
          <TouchableOpacity onPress={() => navigation.replace('Questionnaire')}>
            <Text style={style_connexion.text_btn_1}> S'inscrire</Text>
          </TouchableOpacity>
        </View>
        <View style={style_connexion.placement_btn_2}></View>

        <View style={style_connexion.border_btn_2}>
          <TouchableOpacity onPress={() => navigation.replace('Connexion')}>
            <Text style={style_connexion.text_btn_2}> Se connecter</Text>
          </TouchableOpacity>
        </View>
          <View style={style_connexion.placement_btn_2}></View>

          <View style={style_connexion.border_btn_2}>
              <TouchableOpacity onPress={() => navigation.replace('Mdpoublie')}>
                  <Text style={style_connexion.text_btn_2}> Mot de passe oublié</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}
