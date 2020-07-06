import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import styles_home from '../css/style_home'

export default class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles_home.container}>
        <View style={styles_home.view_image}>
          <Image
              style={styles_home.image1}
              source={require('./../assets/images/logo.png')}
          />
        </View>


        <View style={styles_home.placement_text}>
          <Text>
            Happy Fit c’est une méthode pour être{'\n'}
            {'\n'}
            "heureux quel que soit son fit "{'\n'}
            {'\n'}
            Soit en s’amusant à notre cours de sport, soit en participant à un
            de mes ateliers confiance en soi.{'\n'}
            {'\n'}
            ​Ce que nous voulons transmettre avec HappyFit : c’est que le sport
            c’est avant tout du plaisir et ça reste le meilleur moyen de prendre
            confiance en soi.
          </Text>
        </View>
        <View style={styles_home.border_container}></View>
        <View style={styles_home.view_button}>
          <View style={styles_home.button}>
          <TouchableOpacity style={styles_home.placement_button} onPress={()=>navigation.navigate('Introduction')}>
            <Text style={styles_home.placement_btn_text}>
              Inscription
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles_home.border_container}></View>
          <View style={styles_home.button}>
            <TouchableOpacity style={styles_home.placement_button} onPress={()=>navigation.navigate('Connexion')}>
              <Text style={styles_home.placement_btn_text}>
              Connexion
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}