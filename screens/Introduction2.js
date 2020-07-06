import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

function Introduction2Screen({ navigation }) {
        
            return (
                <View style={styles.container}>
                <View>
                  <Image 
                  style={styles.image1}
                  source={require('./../assets/images/bras-.jpg')}
                  />
                </View>
            
                <View style={styles.text1}>
                  <Text style={{textAlignVertical: "center", textAlign: "center",}}>
                  {"\n"}{"\n"}Choisis un programme,{"\n"}{"\n"}
            
                        fais nous savoir ton expérience.{"\n"}{"\n"}
            
                        Nous te suggérerons un programme optimisé selon tes besoins...{"\n"}
                  </Text>
                </View>
            
                <View style={styles.button1}>
                  <Button
                    onPress={() => navigation.navigate('Introduction3')}
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

export default Introduction2Screen;