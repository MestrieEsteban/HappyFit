import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

export default class Nouveau_Programme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          exercise: 'Curls hatère',
          muscle: 'Biceps',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          exercise: 'Dips',
          muscle: 'Triceps',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          exercise: 'Développés épaules',
          muscle: 'Epaules',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          exercise: 'Gainage',
          muscle: 'Abdominaux',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          exercise: 'Squat',
          muscle: 'Quadriceps',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
        {
          exercise: 'Ischios',
          muscle: 'Fentes',
          serie: 4,
          repetition: 40,
          pause: "1'30",
        },
      ],
      liste: [],
      page: 0,
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    let list_data = []
    for (let i = this.state.page; i < this.state.page + 3; i++) {
      list_data.push({
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
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 2 }}></View>
        <View style={{ flex: 2.5 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Nouveau Programme
          </Text>
        </View>
        <View style={{ flex: 2 }}></View>
        {this.state.liste.length > 0 ? (
          <FlatList
            data={this.state.liste}
            style={{ height: height / 1.5 }}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#3598DA',
                    backgroundColor: '#3598DA',
                    width: 200,
                    height: 30,
                  }}
                >
                  <View style={{ flex: 0.2 }}></View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>{item.exercise} </Text>
                    <Text style={{ color: 'white' }}>{item.muscle}</Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EEEEEE',
                    backgroundColor: '#EEEEEE',
                    width: 200,
                    height: 110,
                  }}
                >
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 0.3 }}></View>
                    <Text style={{ flex: 1 }}>
                      Nombre de série: {item.serie}
                    </Text>
                    <Text style={{ flex: 1 }}>
                      Nombre de répétitions: {item.repetition}
                    </Text>
                    <Text style={{ flex: 1 }}>Temp de pause: {item.pause}</Text>
                  </View>
                </View>
                <View style={{ marginTop: height / 25 }}></View>
              </View>
            )}
          />
        ) : (
          <View></View>
        )}
        {this.state.page + 3 != this.state.data.length ? (
          <View style={{ flex: 5 }}>
            <TouchableOpacity onPress={() => this.update()}>
              <FontAwesome
                style={{ marginLeft: width / 50}}
                name="arrow-down"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 5 }}></View>
        )}
        <View style={{ flex: 7, flexDirection: 'row' }}>
          <Entypo name="cross" size={65} color="black" />
          <FontAwesome
            style={{ marginLeft: width / 2 }}
            name="check"
            size={50}
            color="black"
          />
        </View>
      </View>
    )
  }
}
