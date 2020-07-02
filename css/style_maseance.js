import {StyleSheet} from 'react-native'

export default StyleSheet.create({ 

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    card: {
        backgroundColor: '#f2f2f2',
        margin: 35,
    },

    h2:{
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop : 10,
        fontFamily: "Sarpanch-Regular",
    },

    text:{
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop : 5,
        fontFamily: "Sarpanch-Regular"

    },

    text2:{
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop : 5,
        marginBottom: 20,
        fontFamily: "Sarpanch-Regular"

    },
    
    appButton: {
        elevation: 8,
        backgroundColor: "#000000",
        borderRadius: 50,
        marginLeft: 50,
        marginRight: 50,
        paddingVertical: 10,
        paddingHorizontal:0,
      },

      ButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },

      ButtonChrono: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }, 

      appButtonchrono: { 
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 40,
        width: 150,
        marginButtom: 0,
        marginTop: 0,
        marginLeft: -30,
        marginRigth: 0,        
      },

      container2:{
          flex: 2,
          backgroundColor: "white",
      },

      container3:{
        flex: 1,
        backgroundColor: "white",
      },

        alternativeLayoutButtonContainer: {
            marginTop: 20,
            marginButtom: 0,
            marginLeft: 50,
            marginRigth: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            textAlign: 'center',
        },

        ButtonMinuter: {
            margin: 50,
            fontSize: 20,
            marginTop:10
        },

        Button: {
            width: 50,
            height: 50, 
            color: "red",
            
        },

        cercle:{
            marginTop: 100,
            marginButtom: 100,
            marginLeft: 100,
            marginRigth: 100,
        },
        
        chronostyle:{
            fontSize: 20, 
        }
})