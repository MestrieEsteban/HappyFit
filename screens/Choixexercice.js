import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native'
import choixexercice from '../css/style_choixexercice'

export default class Choixexercice extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  navigation() {
    this.props.navigation.replace('Dashboard')
  }

  render() {
    return (
      <View style={choixexercice.container}>
        <View style={choixexercice.container1}></View>

        <View style={choixexercice.container2}>
          <Text style={choixexercice.texte}>Quel exercice ?</Text>
          <View style={choixexercice.border_container}>
            <TouchableOpacity
              style={choixexercice.button}
              onPress={() => this.navigation()}
            >
              <Text style={choixexercice.text_button}>Tractions</Text>
            </TouchableOpacity>
          </View>

          <View style={choixexercice.border_container}>
            <TouchableOpacity
              style={choixexercice.button1}
              onPress={() => this.navigation()}
            >
              <Text style={choixexercice.text_button1}>Curl</Text>
            </TouchableOpacity>
          </View>

          <View style={choixexercice.border_container}>
            <TouchableOpacity
              style={choixexercice.button2}
              onPress={() => this.navigation()}
            >
              <Text style={choixexercice.text_button2}>Pompes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={choixexercice.container3}></View>
      </View>
    )
  }
}
