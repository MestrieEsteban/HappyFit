import React, { Component } from 'react'
import { Dimensions, Text, View, Image } from 'react-native'
import validate from '../css/style_validate'

export default class Validation_Questionnaire extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { height } = Dimensions.get('window')
    const box_count = 3
    const box_height = height / box_count

    return (
      <View style={validate.container}>
        <View style={validate.border_title}></View>
        <View style={validate.view_title}>
          <Text style={validate.title}>Mumble prépare ton</Text>
          <Text style={validate.title}>nouveau programme</Text>
        </View>
        <View style={validate.border_image}></View>
        <View style={validate.view_image}>
          <Image
            source={require('../assets/images/loading.gif')}
            style={validate.image}
          />
        </View>
      </View>
    )
  }
}
