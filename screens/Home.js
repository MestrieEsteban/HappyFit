import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import home from '../css/style_home'


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'jhon',
    }
  }

  render() {
    return (
      <View style={home.container}>
       
        <View style={home.container1}>
        <Image style ={home.image}
            source={require('../assets/images/logo.png')}>
        </Image>
          
        </View>

        <View style={home.container2}>

        <View style={home.border_container}>
            <TouchableOpacity
              style={home.button}
              onPress={() => this.valider_Form()}
              onPress={() => this.props.navigation.navigate('Dashboard')}
            >
              <Text style={home.text_button}>Inscription</Text>
            </TouchableOpacity>
          </View>

          <View style={home.border_container}>
            <TouchableOpacity
              style={home.button}
              onPress={() => this.props.navigation.navigate('Dashboard')}
            >
              <Text style={home.text_button}>Connexion</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>
    )
  }
}
