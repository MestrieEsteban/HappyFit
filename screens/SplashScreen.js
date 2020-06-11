import React, { Component } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import styles from '../css/style_placement'
import TouchableOpacity from 'react-native-web/src/exports/TouchableOpacity'

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
      <View style={styles.container}>
        <View style={styles.border_container}></View>
        <View style={styles.border_logo}>
          <Text style={styles.text_logo}>Logo</Text>
        </View>
        <View style={styles.border_name}>
          <Text style={styles.text_name}>HappyFit</Text>
        </View>
      </View>
    )
  }
}
