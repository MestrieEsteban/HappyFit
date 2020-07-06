import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

function Introduction1Screen({ navigation }) {
  return (
    <View style={styles.container}>
    <View>
      <Image 
      style={styles.image1}
      source={require('./../assets/images/robots.png')}
      />
    </View>

    <View style={styles.text1}>
      <Text style={{textAlignVertical: "center", textAlign: "center",}}>
      {"\n"}{"\n"}Bienvenue sur Happy Fit,{"\n"}{"\n"}

            Je suis Mumble{"\n"}{"\n"}

            Ton coach fitness...{"\n"}{"\n"}
      </Text>
    </View>

    <View style={styles.button1}>
      <Button
        onPress={() => navigation.navigate('Introduction2')}
        title="Click me"
        color="#000000"
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#FFFFFF'
  },
  image1:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 410,
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
});

export default Introduction1Screen;