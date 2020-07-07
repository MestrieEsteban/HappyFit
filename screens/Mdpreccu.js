import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import mdpreccu from '../css/style_mdpreccu'
import { FontAwesome } from '@expo/vector-icons'

export default class Mdpreccu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={mdpreccu.container}>
        <View style={mdpreccu.container1}>
          <Text style={mdpreccu.h2}>Email envoyé</Text>
        </View>

        <View style={mdpreccu.container2}>
          <FontAwesome
            style={mdpreccu.logo}
            name="check-square-o"
            size={180}
            color="black"
          />
        </View>

        <View style={mdpreccu.container3}>
          <Text style={mdpreccu.text2}>un email à été envoyer</Text>
          <Text style={mdpreccu.text2}>surn votre adresse mail</Text>
          <Text
            style={mdpreccu.text}
            onPress={() => this.props.navigation.navigate('Mdpreni')}
          >
            Me renvoyer un mail
          </Text>
        </View>
      </View>
    )
  }
}
