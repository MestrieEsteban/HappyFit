import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput } from 'react-native';

<<<<<<< HEAD
=======


>>>>>>> origin
function EmailenvoyeScreen({ navigation }) {

        return (
            <View style={styles.container}>
                

                <View style={styles.text1}>
                    <Text style={{textAlignVertical: "center", textAlign: "center",}}>{"\n"}{"\n"}{"\n"}Email envoyé{"\n"}{"\n"}{"\n"}</Text>
                </View>


                <View style={styles.image1}>
                    <Image 
                    style={{ flex:1, alignItems: 'stretch', justifyContent: 'center'}}
                    source={require('../assets/images/envem.png')}
                    />
                </View>

                <View style={styles.text1}>
                    <Text style={{textAlignVertical: "center", textAlign: "center",}}>{"\n"}{"\n"}Un email a été envoyé sur votre adresse mail{"\n"}{"\n"}</Text>
                </View>

                <View>
                    <TextInput style={{ marginLeft: 70, marginRight: 70, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Me renvoyer un email'/>
                    <Text>{"\n"}</Text>
                </View>

                <View style={styles.button1}>
                    <Button
                        //onPress={() => navigation.navigate('Introduction1')}
                        title="Renvoyer un email"
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
      marginLeft: 40
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

  export default EmailenvoyeScreen;