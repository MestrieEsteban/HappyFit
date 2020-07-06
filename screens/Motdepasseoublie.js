import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput } from 'react-native';



function MotdepasseoublieScreen({ navigation }) {

        return (
            <View style={styles.container}>
                

                <View style={styles.text1}>
                    <Text style={{textAlignVertical: "center", textAlign: "center",}}>{"\n"}{"\n"}{"\n"}Mot de passe oublié{"\n"}{"\n"}{"\n"}</Text>
                </View>


                <View style={styles.image1}>
                    <Image 
                    style={{alignItems: 'stretch', justifyContent: 'center'}}
                    source={require('../assets/images/icon.jpg')}
                    />
                </View>

                <View style={styles.text1}>
                    <Text style={{textAlignVertical: "center", textAlign: "center",}}>{"\n"}{"\n"}Rénitialiser le mot de passe</Text>
                </View>

                <View>
                    <Text>{"\n"}</Text>
                    <TextInput style={{ marginLeft: 70, marginRight: 70, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Email'/>
                    <Text>{"\n"}</Text>
                </View>

                <View style={styles.button1}>
                    <Button
                        onPress={() => navigation.navigate('Emailenvoye')}
                        title="Envoyer"
                        color="#000000"
                    />
                </View>   
            </View>
        );
    }


const styles = StyleSheet.create ({
    container: {
      backgroundColor: '#FFFFFF',
    },
    image1:{
      width: 140,
      height: 200,
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 50
    },
    text1:{
      
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

  export default MotdepasseoublieScreen;