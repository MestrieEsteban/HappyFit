import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import profil from '../css/style_profil'
import ProfilePicture from 'react-native-profile-picture'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

function Separator() {
  return <View style={profil.separator} />
}

export default class Profil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
    }
  }

  componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }

    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }
  }

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        this.setState({ image: result.uri })
      }

      console.log(result)
    } catch (E) {
      console.log(E)
    }
  }

  render() {
    return (
      <View style={profil.container}>
        <View style={profil.container1}>
          <Text style={profil.h2}> Profil</Text>

          <View style={profil.profilpicture}>
            <ProfilePicture
              onPress={this._pickImage}
              isPicture={true}
              width={100}
              height={100}
              requirePicture={require('../assets/images/profil.jpg')}
              shape="circle"
            />
          </View>
        </View>

        <View style={profil.container2}>
          <Text style={profil.text2}>Jane Doe</Text>
          <Text style={profil.text2}>Email: Jane.doe@gmail.com</Text>
          <Separator />

          <View style={profil.infoperso}>
            <Text style={profil.text2}>Age : 22</Text>
            <Text style={profil.text2}>Sexe : Homme</Text>
          </View>

          <View style={profil.infoperso2}>
            <Text style={profil.text2}>Niveau: Débutant</Text>
            <Text style={profil.text2}>Poids: 50kg</Text>
          </View>
          <Separator />

          <View>
            <Text style={profil.text2}>Objectif : Prise de masse</Text>
          </View>
          <Separator />

          <View>
            <TouchableOpacity
              style={profil.button}
              onPress={() => this.props.navigation.replace('Editprofil')}
            >
              <Text style={profil.text_button}>Editer</Text>
            </TouchableOpacity>

            <Text style={profil.text2} onPress={() =>  this.props.navigation.replace('Aideinfo')}>
              {' '}
              <AntDesign name="infocirlce" size={24} color="black" /> info
            </Text>
            <Text style={profil.text2} onPress={() =>  this.props.navigation.replace('Home')}>
              {' '}
              <AntDesign name="logout" size={24} color="black" /> Déconnecté
            </Text>
          </View>
        </View>

        <View style={profil.container3}></View>
      </View>
    )
  }
}
