import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native'
import editexercice from '../css/style_editexercice'

export default class Editexercice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      nbrSerie: '',
      nbrsec: '',
    }
  }
  valider_Form() {
    const { nombre, nbrSerie, nbrsec } = this.state
    if (nombre === '' || nbrSerie === '' || nbrsec === '') {
      Alert.alert('un des champs est vide')
    } else {
      this.props.navigation.replace('Dashboard')
    }
  }

  render() {
    return (
      <View style={editexercice.container}>
        <View style={editexercice.container1}></View>

        <View style={editexercice.container2}>
          <Text style={editexercice.texte}>Pompes </Text>

          <View style={editexercice.input_back}>
            <TextInput
              placeholder="15"
              placeholderTextColor="black"
              style={editexercice.input_text}
              onChangeText={(nombre) => {
                this.setState({ nombre })
              }}
            />
          </View>

          <View style={editexercice.input_back}>
            <TextInput
              placeholder="5 séries"
              placeholderTextColor="black"
              style={editexercice.input_text}
              onChangeText={(nbrSerie) => {
                this.setState({ nbrSerie })
              }}
            />
          </View>

          <View style={editexercice.input_back}>
            <TextInput
              placeholder="5 Sec"
              placeholderTextColor="black"
              style={editexercice.input_text}
              onChangeText={(nbrsec) => {
                this.setState({ nbrsec })
              }}
            />
          </View>

          <View style={editexercice.border_container}>
            <TouchableOpacity
              style={editexercice.button}
              onPress={() => this.valider_Form()}
            >
              <Text style={editexercice.text_button}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={editexercice.container3}></View>
      </View>
    )
  }
}
