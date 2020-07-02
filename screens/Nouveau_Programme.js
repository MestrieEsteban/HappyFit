import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import style_list_programme from '../css/style_new_programme'
import validate from '../css/style_validate'

export default class Nouveau_Programme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          exercise: 'Curls hatère',
          muscle: 'Biceps',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          id: 2,
          exercise: 'Dips',
          muscle: 'Triceps',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          id: 3,
          exercise: 'Développés épaules',
          muscle: 'Epaules',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          id: 4,
          exercise: 'Gainage',
          muscle: 'Abdominaux',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          id: 5,
          exercise: 'Squat',
          muscle: 'Quadriceps',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          id: 6,
          exercise: 'Ischios',
          muscle: 'Fentes',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
      ],
      liste: [],
      page: 0,
      timePassed: false,
    }
  }

  componentDidMount() {
    this.loadData()
    setTimeout(() => this.setState({ timePassed: true }), 5000)
  }

  loading = () => {
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

  programme() {
    return (
      <View style={style_list_programme.container}>
        <View style={style_list_programme.border_container}></View>
        <View style={style_list_programme.border_title}>
          <Text style={style_list_programme.title_text}>Nouveau Programme</Text>
        </View>
        <View style={style_list_programme.border_container}></View>
        {this.state.liste.length > 0 ? (
          <FlatList
            data={this.state.liste}
            style={style_list_programme.heigth_list}
            renderItem={({ item }) => (
              <View>
                <View style={style_list_programme.border_up}>
                  <View style={style_list_programme.border_text_up}></View>
                  <View style={style_list_programme.placement_text_up}>
                    <Text style={style_list_programme.text_up}>
                      {item.exercise}{' '}
                    </Text>
                    <Text style={style_list_programme.text_up}>
                      {item.muscle}
                    </Text>
                  </View>
                </View>
                <View style={style_list_programme.border_down}>
                  <View style={style_list_programme.placement_text_down}>
                    <View style={style_list_programme.border_text_down}></View>
                    <Text style={style_list_programme.text_down}>
                      Nombre de série: {item.serie}
                    </Text>
                    <Text style={style_list_programme.text_down}>
                      Nombre de répétitions: {item.repetition}
                    </Text>
                    <Text style={style_list_programme.text_down}>
                      Temp de pause: {item.pause}
                    </Text>
                  </View>
                </View>
                <View style={style_list_programme.espacement_liste}></View>
              </View>
            )}
          />
        ) : (
          <View></View>
        )}
        {this.state.page + 3 != this.state.data.length ? (
          <View style={style_list_programme.border_arrow}>
            <TouchableOpacity onPress={() => this.update()}>
              <FontAwesome
                style={style_list_programme.espacement_arrow}
                name="arrow-down"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={style_list_programme.border_arrow}></View>
        )}
        <View style={style_list_programme.border_check}>
          <Entypo name="cross" size={65} color="black" />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Mes Programmes', {
                data: this.state.data,
              })
            }
          >
            <FontAwesome
              style={style_list_programme.espacement_check}
              name="check"
              size={50}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  loadData = () => {
    let list_data = []
    for (let i = this.state.page; i < this.state.page + 3; i++) {
      list_data.push({
        id: this.state.data[i].id,
        exercise: this.state.data[i].exercise,
        muscle: this.state.data[i].muscle,
        serie: this.state.data[i].serie,
        repetition: this.state.data[i].repetition,
        pause: this.state.data[i].pause,
      })
    }
    this.setState({ liste: list_data })
  }

  update = () => {
    this.setState({ page: this.state.page + 3 }, function () {
      this.loadData()
    })
  }

  render() {
    return !this.state.timePassed ? this.loading() : this.programme()
  }
}
