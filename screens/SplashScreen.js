import React, { Component } from 'react'
import { Text, View } from 'react-native'
import redirection from '../css/style_redirection'
<<<<<<< HEAD
=======
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import {TouchableWithoutFeedback} from "react-native-web";
>>>>>>> alexandre

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
<<<<<<< HEAD
=======
        <TouchableWithoutFeedback>
>>>>>>> alexandre
      <View style={redirection.container}>
        <View style={redirection.border_container}></View>
        <View style={redirection.border_logo}>
          <Text style={redirection.text_logo}>Logo</Text>
        </View>
        <View style={redirection.border_name}>
          <Text style={redirection.text_name}>HappyFit</Text>
        </View>
      </View>
<<<<<<< HEAD
=======
        </TouchableWithoutFeedback>
>>>>>>> alexandre
    )
  }
}
