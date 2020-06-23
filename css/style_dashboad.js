import {StyleSheet} from 'react-native'

export default StyleSheet.create({ 
container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
},

name: {
    flex: 1,
    backgroundColor: 'white',
},
presentation: {
    flex: 2,
    backgroundColor: '#f2f2f2',
    margin: 15,
},

statistique: {
    flex: 3,
    backgroundColor: '#f2f2f2',
    margin: 15,
},

text:{
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop : 40,
},

submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
},

submitText:{
    paddingTop:5,
    paddingBottom:10,
    fontSize: 25,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#000',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
},

Demande:{
    marginRight:20,
    marginLeft:20,
    marginTop:30,
},

submitDemande:{
    paddingTop:5,
    paddingBottom:10,
    fontSize: 20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'gray',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'black'
},

separator: {
    borderBottomWidth: 2,
},

statistiqueText:{
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop : 10,
},

LineChart:{
    textAlign: 'center',
    alignItems: 'center',
}



})