import React, {useState} from 'react';
import { View, 
        Text, 
        TextInput, 
        TouchableOpacity,
        ScrollView
 } from 'react-native';

import Styles from '../Styles';

export default function Add  ({  navigation}) {
      
  // Koden för att göra Create är inspirerad av dessa två länkar
  // https://medium.com/@hardimaneric/full-crud-with-fetch-and-javascript-4e6c43080261
  // https://www.youtube.com/watch?v=c9Sg9jDitm8
  // const här nedan används useState med en tom sträng ''. När användaren lägger in text och klickar på knappen uppdateras strängen och kopplas till Api. 
        
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [advanced, setAdvanced] = useState('');
  const [img, setImg] = useState('');

  //const addSign kopplar upp sig mot api. Genom att sätta en method talar man om vad Apit ska användas till. Här är det POST metoden istället för det vanliga Read. 
  //Accept när man gör en förfrågan till mitt api och att koden vill JSON i retur
  //JSON.stringify används för att konvertera JSON till en sträng och här har jag kopplat det till de olika delarna i mitt api.
  //Jag har valt att använda navigation.navigate och skicka användaren hem efter den har lagt in en ny skylt. Då uppdateras listan automatiskt. 
        
  const addSign = () => {
       const API_URL = 'https://hundappis.herokuapp.com/hundappis/';
                           
        // console.log(name);
        fetch (API_URL, {
          method: 'POST', 
          headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json' 
                   }, 
          body: JSON.stringify({
          sign: name,
          description: description, 
          advanced: advanced,
          img: img,
                    })
                }) 
        .then(response => response.json())
                // console.log('laddas detta in?')
        navigation.navigate('Home');
            };
//Här har jag valt att använda formulärfunktionen TextInput med placeholdertext. OnChangeText är kopplat till ovanstående const samt body. 
//När användaren skrivit in önskad text och lagt en url till en bild, klickar på knappen addSign, sker det som koden som ligger i const addSign.
//jag har valt att använda mig av scrollView här som ligger under två View för att användaren ska kunna scrolla på ett bra sätt. 
//I de TextInput som behöver ha flera rader har jag lagt till multiline och 4 rader. 
         return (
           <View style = {Styles.background}> 
           <View style={Styles.container}>
           <ScrollView>
              <Text style = {Styles.textHeading}>Hjälp till och få hundappis att växa!</Text>
              <Text style = {Styles.textHeadingSmall}>Dina ideer och tankar kan hjälpa andra med deras störningsträning. </Text>

                                 {/* sign */}
              <TextInput
                  style={[Styles.inputTone, Styles.inputToneSmall]}
                  placeholder = ' Skyltnamnet här'
                  placeholderTextColor = '#A193C7'
                  onChangeText={sign => setName(sign)}
                  value={name}
                      />

                                {/* description */}
              <TextInput
                  multiline
                  numberOfLines={4}
                  style={[Styles.inputTone, Styles.inputToneBig]}
                  placeholder = ' Förklaring för nybörjare'
                  placeholderTextColor = '#A193C7'
                  onChangeText={description => setDescription(description)}
                  value={description}
                      />

                                {/* advanced */}
              <TextInput
                  style={[Styles.inputTone, Styles.inputToneBig]}
                  multiline
                  numberOfLines={4}
                  placeholder = ' Avancerad förklaring'
                  placeholderTextColor = '#A193C7'
                  onChangeText={advanced => setAdvanced(advanced)}
                  value={advanced}
                      />
                                {/* img */}
              <TextInput
                  style={[Styles.inputTone, Styles.inputToneSmall]}
                  placeholder = ' Länk till bild i jpg '
                  placeholderTextColor = '#A193C7'
                  onChangeText={img => setImg(img)}
                  value={img}
                      />

                     
            <TouchableOpacity 
              style={[Styles.buttonTone, Styles.buttonToneRegular]}                    
              onPress={() =>  addSign()}
                >
              <Text  style={[Styles.buttonToneText]}>Lägg till
                </Text>
            </TouchableOpacity>
          </ScrollView>
          </View>
          </View>
                )
}

