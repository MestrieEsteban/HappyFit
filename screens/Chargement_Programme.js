import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import validate from '../css/style_validate'

export default class Chargement_Programme extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={validate.container}>
        <View style={validate.border_title}></View>
        <View style={validate.view_title}>
          <Text style={validate.title}>Mumble calcule ton</Text>
          <Text style={validate.title}>nouveau programme</Text>
        </View>
        <View style={validate.border_image_2}></View>
        <Image
          source={require('../assets/images/loading.gif')}
          style={validate.image2}
        />
        <View style={validate.view_placement_text}>
          <Text style={validate.validate_text_2}>Tips</Text>
          <Text style={validate.validate_text_3}>
            Buvez de l'eau régulièrement
          </Text>
        </View>
      </View>
    )
  }
}
