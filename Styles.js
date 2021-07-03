import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black',
    flexDirection: 'column',
    flexGrow: 1,
  },
 
container: {
      flex: 1,
      marginTop: 10,
      marginLeft: 10, 
      marginRight: 10,
    },

  //**************** */
 // Text settings 
//**************** */
textHeading: {
    fontSize: 24, 
    color: '#62a0a1', 
    fontWeight: 'bold' 
  }, 
textHeadingSmall: {
    fontSize: 18,
    color: '#62a0a1', 
    padding: 5
  },
textBody: {
    fontSize: 18,
    marginBottom: 12,
    color: '#A193C7', 
    padding: 5
  },
  
  //**************** */
 //  Image settings
//**************** */
imageStyle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5, 
    marginBottom: 5,
    marginRight: 5,
  },
imageSize: {
    width: 310, 
    height: 210, 
    marginTop: 5, 
    resizeMode: 'cover',
  },

  //**************** */
 // Button settings
//**************** */
buttonTone: {
    padding: 8, 
    alignItems: 'center',       
    borderRadius: 10,
    marginTop: 15,
  },
buttonToneText:{
    color: 'black',
    fontSize: 18, 
    fontWeight: 'bold', 
  },
buttonToneRegular: {
    backgroundColor: "#62a0a1",         
  },
buttonToneDanger:{
    backgroundColor:'#c20c0c'
  },
  //**************** */
 //  FlatList settings
//**************** */
  listBody: {
    marginTop: 15,
  }, 

  //**************** */
 //  TextInput settings
//**************** */
inputTone: {
    borderColor: '#62a0a1',
    color: '#A193C7', 
    borderWidth: 1, 
    marginBottom: 4,
    padding: 2,
  },
inputToneSmall: {
    height: 40,
  },
inputToneBig: {
    height: 100
  },


});

export default Styles;