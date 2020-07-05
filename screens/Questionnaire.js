import React, { Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import slider from '../css/style_carousel'
import RadioForm from 'react-native-simple-radio-button'
import Slider from 'react-native-slider'

const gender = [
  { label: 'Femme', value: 0 },
  { label: 'Homme', value: 1 },
]

const level = [
  { label: 'Débutant', value: 0 },
  { label: 'Intermédiaire', value: 1 },
  { label: 'Avancé', value: 1 },
]

export default class Questionnaire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      weight: '',
      height: '',
      gender: gender[0].label,
      page: 1,
      forme: 0,
      repas: 1,
      level: level[0].label,
      objectif: null,
    }
  }

  page1_validate() {
    const { firstname, lastname, weight, height, gender } = this.state
    if (firstname === '' && lastname === '' && weight === '' && height === '') {
      alert('Vérifier que dans les champ de saisit ne sont pas vide')
    }
    if (gender === '') {
      alert("Vérifier d'avoir selectionné le bouton radio")
    }
    if (
      firstname !== '' &&
      lastname !== '' &&
      weight !== '' &&
      height !== '' &&
      gender !== ''
    ) {
      this.setState({ page: 2 })
    }
  }

  page3_validate() {
    const { objectif, firstname, lastname, weight, height, gender } = this.state
    if (objectif === null) {
      alert("Vérifier d'avoir cliquer sur l'objectif")
    }
    if (
      objectif !== null &&
      firstname !== '' &&
      lastname !== '' &&
      weight !== '' &&
      height !== '' &&
      gender !== ''
    ) {
      this.props.navigation.replace('Mes Programmes', {
        loading: 'questionnaire',
      })
    }
  }

  render() {
    const { page } = this.state

    return (
      <View style={slider.container}>
        {/* page 1 */}
        {page === 1 ? (
          <View style={slider.view_container}>
            <View style={slider.border_container}></View>
            <View style={slider.espacement_progression_button}>
              <Image
                style={slider.image}
                source={require('../assets/images/btn-fill.png')}
              />
              <Image
                style={[slider.image, slider.espacement_image]}
                source={require('../assets/images/btn-unfulfilled.png')}
              />
              <Image
                style={[slider.image, slider.espacement_image]}
                source={require('../assets/images/btn-unfulfilled.png')}
              />
            </View>

            <View style={slider.border_container}></View>
            <View style={slider.view_title}>
              <Text style={slider.title}>Mieux te </Text>
              <Text style={slider.title}>connaître</Text>
            </View>
            <View style={slider.view_input}>
              <View style={slider.input_back}>
                <TextInput
                  placeholder="Ton nom ?"
                  placeholderTextColor="black"
                  style={slider.input_text}
                  onChangeText={(firstname) => {
                    this.setState({ firstname })
                  }}
                />
              </View>
              <View style={slider.border_container_input}></View>
              <View style={slider.input_after}>
                <TextInput
                  placeholder="Ton prénom ?"
                  placeholderTextColor="black"
                  style={slider.input_text}
                  onChangeText={(lastname) => {
                    this.setState({ lastname })
                  }}
                />
              </View>
              <View style={slider.border_container_input}></View>
              <View style={slider.input_after}>
                <TextInput
                  placeholder="Ton poids ?"
                  placeholderTextColor="black"
                  style={slider.input_text}
                  onChangeText={(weight) => {
                    this.setState({ weight })
                  }}
                />
              </View>
              <View style={slider.border_container_input}></View>
              <View style={slider.input_after}>
                <TextInput
                  placeholder="Ta taille ?"
                  placeholderTextColor="black"
                  style={slider.input_text}
                  onChangeText={(height) => {
                    this.setState({ height })
                  }}
                />
              </View>
              <View style={slider.espacement_btn_radio}></View>
              <RadioForm
                radio_props={gender}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'grey'}
                animation={true}
                buttonInnerColor={'grey'}
                selectedButtonColor={'black'}
                labelStyle={{ color: 'grey' }}
                buttonSize={15}
                onPress={(gender) => {
                  this.setState({ gender: gender })
                }}
              />
              <View style={slider.espacement_global}></View>
              <View style={slider.border_container}>
                <TouchableOpacity
                  style={slider.button}
                  onPress={() => this.page1_validate()}
                >
                  <Text style={slider.text_button}>Suivant</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        {/* page 2 */}
        {page === 2 ? (
          <View style={slider.view_container}>
            <View style={slider.border_container}></View>
            <View style={slider.espacement_progression_button}>
              <Image
                style={slider.image}
                source={require('../assets/images/btn-fill.png')}
              />
              <Image
                style={[slider.image, slider.espacement_image]}
                source={require('../assets/images/btn-fill.png')}
              />
              <Image
                style={[slider.image, slider.espacement_image]}
                source={require('../assets/images/btn-unfulfilled.png')}
              />
            </View>
            <View style={slider.border_container}></View>
            <View style={slider.view_title}>
              <Text style={slider.title}>Un peu plus </Text>
              <Text style={slider.title}>sur toi</Text>
            </View>
            <View style={slider.text_question_espacement}>
              <Text style={slider.text_question}>
                Comment vous sentez-vous après
              </Text>
              <Text style={slider.text_question}> le sport ?</Text>
              <View style={slider.espacement_question_2}>
                <View style={slider.espacement_text_slider}>
                  <Text> Fatigué</Text>
                  <Text style={slider.placement_text_slider_1}> En forme</Text>
                </View>
                <Slider
                  value={this.state.forme}
                  maximumValue={2}
                  minimumValue={0}
                  step={0.1}
                  thumbTintColor={'grey'}
                  onValueChange={(forme) =>
                    this.setState({ forme: parseFloat(forme) })
                  }
                />
              </View>
              <View style={slider.espacement_question_3}>
                <Text style={slider.text_question}>
                  Combien de repas consommez-
                </Text>
                <Text style={slider.text_question}> vous chaque jour ?</Text>
              </View>
              <View style={slider.espacement_question_3}>
                <View style={slider.espacement_text_slider}>
                  <Text style={slider.slider_2_text_1}>1</Text>
                  <Text style={slider.slider_2_text_other}>2</Text>
                  <Text style={slider.slider_2_text_other}>3</Text>
                  <Text style={slider.slider_2_text_other}>4</Text>
                  <Text style={slider.slider_2_text_other}>5</Text>
                </View>
                <Slider
                  value={this.state.repas}
                  maximumValue={5}
                  minimumValue={1}
                  step={1}
                  thumbTintColor={'grey'}
                  onValueChange={(repas) =>
                    this.setState({ repas: parseInt(repas) })
                  }
                />
              </View>
              <View style={slider.radio_btn_2_espacement}>
                <Text style={slider.text_question}>
                  Comment évaluez-vous votre
                </Text>
                <Text style={slider.text_question}> niveau sportif ?</Text>
                <RadioForm
                  radio_props={level}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'grey'}
                  animation={true}
                  buttonInnerColor={'grey'}
                  selectedButtonColor={'black'}
                  labelStyle={{ color: 'grey' }}
                  buttonSize={15}
                  onPress={(level) => {
                    this.setState({ level: level })
                  }}
                />
              </View>
              <View style={slider.btn_2_next}>
                <TouchableOpacity
                  style={slider.button}
                  onPress={() => this.setState({ page: 3 })}
                >
                  <Text style={slider.text_button}>Suivant</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        {/* page 3 */}
        {page === 3 ? (
          <View style={slider.view_container}>
            <View style={slider.border_slider}></View>
            <View style={slider.espacement_progression_button}>
              <Image
                style={slider.image}
                source={require('../assets/images/btn-fill.png')}
              />
              <Image
                style={[slider.image, slider.espacement_image]}
                source={require('../assets/images/btn-fill.png')}
              />
              <Image
                style={[slider.image, slider.espacement_image]}
                source={require('../assets/images/btn-fill.png')}
              />
            </View>
            <View style={slider.border_title}></View>
            <View>
              <Text style={slider.title}>Ton objectif </Text>
            </View>
            <View style={slider.border_espacement_title}></View>
            <View style={slider.espacement_button_objectif}>
              <View style={slider.liste_button_objectif}>
                <TouchableOpacity
                  style={slider.button_objectif}
                  onPress={() => {
                    this.setState({ objectif: 'Prise de masse' })
                  }}
                >
                  <Text style={slider.text_button_objectif}>
                    Prise de masse
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={slider.liste_button_objectif}>
                <TouchableOpacity
                  style={slider.button_objectif}
                  onPress={() => {
                    this.setState({ objectif: 'Maintien' })
                  }}
                >
                  <Text style={slider.text_button_objectif}>Maintien</Text>
                </TouchableOpacity>
              </View>
              <View style={slider.liste_button_objectif}>
                <TouchableOpacity
                  style={slider.button_objectif}
                  onPress={() => {
                    this.setState({ objectif: 'Perte de poids' })
                  }}
                >
                  <Text style={slider.text_button_objectif}>
                    Perte de poids
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={slider.border_container}></View>

            <View style={slider.espacement_btn_validate}>
              <TouchableOpacity
                style={slider.button}
                onPress={() => this.page3_validate()}
              >
                <Text style={slider.text_button}>Terminer</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    )
  }
}
