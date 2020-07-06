import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'
class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => alert('a')}>
          <Image
            style={styles.image1}
            source={require('./../assets/images/fit.jpg')}
          />

          <View style={styles.text1}>
            <Text style={{ textAlignVertical: 'center', textAlign: 'center' }}>
              Happy Fit c’est une méthode pour être{'\n'}
              {'\n'}
              "heureux quel que soit son fit "{'\n'}
              {'\n'}
              Soit en s’amusant à notre cours de sport, soit en participant à un
              de mes ateliers confiance en soi.{'\n'}
              {'\n'}
              ​Ce que nous voulons transmettre avec HappyFit : c’est que le
              sport c’est avant tout du plaisir et ça reste le meilleur moyen de
              prendre confiance en soi.
            </Text>
          </View>

          <View style={styles.button1}>
            <Button
              onPress={() => navigation.navigate('Introduction1')}
              title="Inscription"
              color="#000000"
            />
          </View>

          <View style={styles.button2}>
            <Button
              onPress={() => navigation.navigate('Connexion')}
              title="Connexion"
              color="#000000"
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  image1: {
    width: 350,
    height: 350,
  },
  button1: {
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  button2: {
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
})

export default HomeScreen
