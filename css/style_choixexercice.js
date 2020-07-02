import {StyleSheet} from 'react-native'

export default StyleSheet.create({ 

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    container1: {
        flex: 0.5,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    container2: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginLeft: 40,
        marginRight: 40,
    },
    container3: {
        flex: 0.5,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    
    texte:{
        fontFamily: "arial",
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    border_container:{
        flex: 1,
      },

      button:{
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 40,
        width: 170,
        margin:50
      },

      text_button:{
        color: 'black',
        alignItems: 'center',
        marginLeft: 55,
        marginTop: 5,
        fontSize: 18,
      },

      button1:{
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 40,
        width: 170,
        marginTop: 0,
        marginButtom: 0,
        marginLeft: 50,
        marginRigth: 25,
      },

      text_button1:{
        color: 'black',
        alignItems: 'center',
        marginLeft: 55,
        marginTop: 5,
        fontSize: 18,
      },

      button2:{
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 40,
        width: 170,
        marginTop: -50,
        marginButtom: 0,
        marginLeft: 50,
        marginRigth: 25,
      },

      text_button2:{
        color: 'black',
        alignItems: 'center',
        marginLeft: 55,
        marginTop: 5,
        fontSize: 18,
      },

})