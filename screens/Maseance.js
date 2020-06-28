import React, { Component } from 'react'
import {Text, View,TouchableHighlight,Dimensions, Button} from 'react-native'
import maseance from '../css/style_maseance'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

const handleTimerComplete = () => alert("Custom Completion Function");

const options = {
  container: {
    width: 200,
    height: 200,
    borderRadius: 100/1,
    backgroundColor: 'red'
  }
};

export default class Maseance extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isTimerStart: false,
        isStopwatchStart: false,
        timerDuration: 90000,
        resetTimer: false,
        resetStopwatch: false,
      };

      this.startStopTimer = this.startStopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
      this.startStopStopWatch = this.startStopStopWatch.bind(this);
      this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    startStopTimer() {
      this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
    }
    resetTimer() {
      this.setState({isTimerStart: false, resetTimer: true});
    }
    startStopStopWatch() {
      this.setState({isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false});
    }
    resetStopwatch() {
      this.setState({isStopwatchStart: false, resetStopwatch: true});
    }
    getFormattedTime(time) {
        this.currentTime = time;
    }

  
    render() {
      return (
        <View style={maseance.container} >
          <View style={maseance.card}>
              <Text style={maseance.h2}>Exercice en cours</Text>
              <Text style={maseance.text}>Série n°1</Text>
              <Text style={maseance.text2}>Nombre n°1</Text>
          </View>

          <TouchableOpacity style={maseance.appButton}>
            <Text style={maseance.ButtonText} onPress={this.startStopStopWatch}>LANCER LE CHRONO</Text>
          </TouchableOpacity>

          <View style={maseance.container2} >
                <View style={maseance.cercle}>
                    <Stopwatch style={maseance.chronostyle} laps msecs 
                    start={this.state.isStopwatchStart}
                    //To start
                    reset={this.state.resetStopwatch}
                    //To reset
                    //options={options}
                    //options for the styling
                   // getTime={this.getFormattedTime}  
                   />
                </View>
          </View>

          <View style={maseance.container3}>
              <View style={maseance.alternativeLayoutButtonContainer}>

                      <TouchableHighlight style={maseance.appButtonchrono} onPress={this.startStopStopWatch}>
                        <Text style={maseance.ButtonChrono}>
                            {!this.state.isStopwatchStart ? "START" : "STOP"}
                        </Text>
                      </TouchableHighlight>

                      <TouchableHighlight style={maseance.appButtonchrono} onPress={this.resetStopwatch}>
                        <Text style={maseance.ButtonChrono}>RESET</Text>
                      </TouchableHighlight>
              </View>
          </View>

        </View>
        
      );
    }
  }