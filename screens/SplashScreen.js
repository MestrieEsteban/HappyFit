import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import redirection from '../css/style_redirection'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { height } = Dimensions.get('window')
    const box_count = 3
    const box_height = height / box_count

    return (
      <View style={redirection.container}>
        <View style={redirection.border_container}></View>
        <View style={redirection.border_logo}>
          <Text style={redirection.text_logo}>Logo</Text>
        </View>
        <View style={redirection.border_name}>
          <Text style={redirection.text_name}>HappyFit</Text>
        </View>
      </View>
    )
  }
}
