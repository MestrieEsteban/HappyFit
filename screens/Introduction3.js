import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

function Introduction3Screen({ navigation }) {
        
            return (
                <View style={styles.container}>
                
                <View>
                    <Text>
                        {"\n"}{"\n"}
                    </Text>
                </View>
                
                <View>
                  <Image 
                  style={styles.image1}
                  source={require('./../assets/images/alt.png')}
                  />
                </View>
            
                <View style={styles.text1}>
                  <Text style={{textAlignVertical: "center", textAlign: "center",}}>
                  {"\n"}{"\n"}{"\n"}{"\n"}Click pour commencer{"\n"}{"\n"}{"\n"}{"\n"}
                  </Text>
                </View>
            
                <View style={styles.button1}>
                  <Button
                    onPress={() => navigation.navigate('Inscription')}
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
      width: 360,
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
  });

export default Introduction3Screen;