import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Dimensions } from 'react-native'
import dashboard from '../css/style_dashboad'
import Menu from '../components/tabMenu'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
}

function Separator() {
  return <View style={dashboard.separator} />
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'jhon',
    }
  }

  render() {
    return (
      <View style={dashboard.container}>
        <View style={dashboard.name}>
          <Text style={dashboard.text}>Salut, {this.state.name}</Text>
        </View>

        <Separator />

        <View style={dashboard.presentation}>
          <TouchableHighlight style={dashboard.submit} onPress={() => this.props.navigation.replace('Maseance')}>
            <Text style={dashboard.submitText}>Commencer</Text>
          </TouchableHighlight>

          <TouchableHighlight style={dashboard.Demande} onPress={() => this.props.navigation.replace('Nouveau Programme')}>
            <Text style={dashboard.submitDemande}>
              Demander à {this.state.name} un nouveau Programme
            </Text>
          </TouchableHighlight>
        </View>

        <View style={dashboard.statistique}>
          <View style={dashboard.statistiqueName}>
            <Text style={dashboard.statistiqueText}>Derniere Statistique</Text>
          </View>

          <View style={dashboard.LineChart}>
            <View>
              <LineChart
                data={line}
                width={300} // from react-native
                height={200}
                yAxisLabel={'-'}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
