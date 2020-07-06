import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import redirection from '../css/style_redirection'
import style_redirection from '../css/style_redirection'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <TouchableWithoutFeedback
        style={redirection.container}
        onPress={() => this.props.navigation.replace('Profil')}
      >
        <View style={style_redirection.view_container}>
          <View style={redirection.border_logo}>
            <Image
              style={redirection.logo}
              source={require('../assets/images/logo.png')}
            />
          </View>
          <View style={redirection.border_name}>
            <Text style={redirection.text_name}>HappyFit</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
