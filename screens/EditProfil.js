import React, { Component } from 'react'
import {Text, View, TouchableOpacity, TextInput} from 'react-native'
import editprofil from '../css/style_editprofil'
import ProfilePicture from 'react-native-profile-picture'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class Editprofil extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        age: '',
        poids: '',
        sexe: '',
        niveau: '',
        objectif: '',
        image: null,
      }
    }

     componentDidMount(){
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
    

    render() {
      return (

            <View style={editprofil.container}>
             <View style={editprofil.container1}>
                <Text style={editprofil.h2}> Editer Profil</Text> 

                  <View style={editprofil.profilpicture}>
                      <ProfilePicture 
                            onPress={this._pickImage}
                            isPicture={true}
                            width = {100}
                            height = {100}
                            requirePicture={require('../assets/images/profil.jpg')}
                            shape='circle'/>
                  </View> 
              
            </View>

            <View style={editprofil.container2}>

                  <View style={editprofil.input_back}>
                  <TextInput
                    placeholder="JaneDoe"
                    placeholderTextColor="black"
                    style={editprofil.input_text}
                    onChangeText={(name) => {
                      this.setState({ name })
                    }}/>
                </View>

                <View style={editprofil.input_back}>
                  <TextInput
                    placeholder="JaneDoe@gmail.com"
                    placeholderTextColor="black"
                    style={editprofil.input_text}
                    onChangeText={(email) => {
                      this.setState({ email })
                    }}/>
                </View>

                <View style={editprofil.input_back}>
                  <TextInput
                    placeholder="22 ans"
                    placeholderTextColor="black"
                    style={editprofil.input_text}
                    onChangeText={(age) => {
                      this.setState({ age })
                    }}/>
                </View>


                <View style={editprofil.input_back}>
                  <TextInput
                    placeholder="78 kg"
                    placeholderTextColor="black"
                    style={editprofil.input_text}
                    onChangeText={(poids) => {
                      this.setState({ poids })
                    }}/>
                </View>


              

                <View>
                <TouchableOpacity style={editprofil.button}
                    onPress={() => this.navigation()}>
                    <Text style={editprofil.text_button}>Editer</Text>
                </TouchableOpacity>

                </View>

              

            </View>

            <View style={editprofil.container3}>

            </View>

      </View>

      )
    }
  }

 
