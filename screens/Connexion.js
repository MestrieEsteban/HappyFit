import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, AsyncStorage } from 'react-native';

class ConnexionScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: '',
            message: '',
            email: '',
            password: '',
        };
    }

    async _login() {

        console.log('email:' + this.state.email + ', password:' + this.state.password);

        if (this.state.email != '' && this.state.password != '') {

            await fetch('https://team-foster.herokuapp.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    pass: this.state.password
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (this.state.email.match(/^\w+@[a-zA-Z]+.[a-zA-Z]+/g) || this.state.email.match(/^\w+.+\w+@+[a-zA-Z]+.[a-zA-Z]+/g)) {
                        this.setState({ status: "users" })
                    } else {
                        this.setState({ status: "companys" })
                    }
                    if (responseJson.token !== undefined) {
                        this.setState({ message: JSON.stringify(responseJson.token) })
                        console.log('token:' + JSON.stringify(responseJson.token));
                        this.setState({ email: '', password: '' })
                        alert("Votre connexion à réussi")
                        this.props.navigation.replace("Flux", {token: this.state.message, status: this.state.status})
                        this.props.navigation.navigate('Home');
                    } else {
                        this.setState({ message: JSON.stringify(responseJson.error) })                        
                        alert(JSON.stringify(responseJson.error));
                        this.props.navigation.navigate('Connexion');
                    }
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.image1}>
                    <Image
                        source={require('../assets/images/icon.jpg')}
                    />
                </View>

                <View style={styles.text1}>
                    <Text style={{ textAlignVertical: "center", textAlign: "center", }}>{"\n"}</Text>
                </View>

                <View>
                    <TextInput onChangeText={(email) => this.setState({ email: email.trim() })} style={{ marginLeft: 70, marginRight: 70, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Email' />
                    <Text>{"\n"}</Text>
                    <TextInput onChangeText={(password) => this.setState({ password: password.trim() })} secureTextEntry={true} style={{ marginLeft: 70, marginRight: 70, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Mot de passe' />
                    <Text>{"\n"}</Text>
                </View>

                <View style={styles.button1}>
                    <Button
                        onPress={() => { this._login().done() }}
                        title="Se connecter"
                        color="#000000"
                    />
                </View>

                <View style={styles.button2}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Inscription')}
                        title="S'inscrire"
                        color="#000000"
                    />
                </View>
            </View>
        );
    }
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
        marginLeft: 50
    },
    text1: {

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

export default ConnexionScreen;