import React, { Component } from 'react'
import { Button, View, Text, Image, StyleSheet, TextInput } from 'react-native'

function MotdepassechangeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Text style={{ textAlignVertical: 'center', textAlign: 'center' }}>
          {'\n'}
          {'\n'}
          {'\n'}Mot de passe changé{'\n'}
          {'\n'}
          {'\n'}
        </Text>
      </View>

      <View style={styles.image1}>
        <Image source={require('../assets/images/pasw.png')} />
      </View>

      <View style={styles.text1}>
        <Text style={{ textAlignVertical: 'center', textAlign: 'center' }}>
          {'\n'}
          {'\n'}
        </Text>
      </View>

      <View style={styles.button1}>
        <Button
          onPress={() => navigation.navigate('Connexion')}
          title="Valider"
          color="#000000"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  image1: {
    width: 140,
    height: 200,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
  },
  text1: {},
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

export default MotdepassechangeScreen
