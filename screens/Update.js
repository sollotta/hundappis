import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity, 
    ScrollView,
    
} from 'react-native';
import Styles from '../Styles';

export default function Update ({ route, navigation}){
    if(route.params?.post){
            console.log(itemId)
    }

// Dessa const är tomma arryer som är kopplade genom det id nr som följer med från detaillistan. 
// Genom att ha de tomma kan koden här nedan fyller i uppgifterna från den skylt vi kom ifrån. 
// Även här har jag gjobbat med useEffect som funktion. 
// Under fetch delen har är funktionerna seName etc kopplade till responseJson och postens namn i apiet. 
// Detta för att koppla samman det gamla med det nya förändrade texten, som användaren har lagt in.
// Det är därför det är två API_URL också den första har fört in informationen från Detailsidan, 
// Den andra skickar in en uppdatering till apiet, genom att använda Stringify och återpostar den nya informationen. Sker genom ex sign: name,
// Om inget nytt skrivs in så ligger den gamla informationen kvar. Detta genom ex setName(responseJson.sign)

    const [name, setName] = useState(''); 
    const [desc, setDesc] = useState('');
    const [adva, setAdva] = useState('');
    const [imgs, setImgs] = useState('');
    
    const [post, setPost] = useState([]);
    const { itemId } = route.params;
    console.log('Update', itemId)

   
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
          const API_URL = 'https://hundappis.herokuapp.com/hundappis/' + itemId;
      
        fetch(API_URL)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('hej', post);
            setPost(responseJson)
            setName(responseJson.sign)
            setDesc(responseJson.description)
            setAdva(responseJson.advanced)
            setImgs(responseJson.img)
            
            })
               
        .catch((error) => 
        console.error(error))
        .finally(() => setLoading(false));                   
   }, []);
        
    const updateSign = () => {
        const API_URL = 'https://hundappis.herokuapp.com/hundappis/' + itemId;
        console.log('Fungerar det nu?', itemId)
            fetch (API_URL, {
            method: 'PUT', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            }, 
            
            body: JSON.stringify({
                    sign: name,
                    description: desc, 
                    advanced: adva,
                    img: imgs,
            })      
          
        }) 
        navigation.navigate('Home');
    }
    
    return (
        <View style = {Styles.background}> 
        <View style={Styles.container}>
            {isLoading == true && <Text  style = {Styles.textBody}>Loading ...
            </Text>}

       <ScrollView>
                <Text style = {Styles.textHeading}>Redigera skyltar!
                     </Text>
                <Text style = {Styles.textHeadingSmall}>
                    Tänk på att när du redigerat en skylt kan du inte gå tillbaka och ändra automatiskt. Utan får skriva nytt igen. 
                    </Text>

                <Text  style = {Styles.textHeadingSmall}>Skyltnamn
                    </Text>
                <TextInput
                        style={[Styles.inputTone, Styles.inputToneSmall]}
                        onChangeText={name => setName(name)}
                        defaultValue={post.sign}
                      />

                <Text  style = {Styles.textHeadingSmall}>Beskrivning av momentet
                    </Text>
                <TextInput
                        multiline
                        numberOfLines={4}
                        style={[Styles.inputTone, Styles.inputToneBig]}
                        onChangeText ={desc => setDesc(desc)}
                        defaultValue={post.description}
                      />

                <Text  style = {Styles.textHeadingSmall}>Avancerad av momentet</Text>
                <TextInput
                        multiline
                        numberOfLines={4}
                        style={[Styles.inputTone, Styles.inputToneBig]}
                        onChangeText={adva => setAdva(adva)}
                        defaultValue={post.advanced}
                      />

                <Text  style = {Styles.textHeadingSmall}>Ny url till bild</Text>
                <TextInput
                        style={[Styles.inputTone, Styles.inputToneSmall]}
                        onChangeText={imgs => setImgs(imgs)}
                        defaultValue={post.img}
                      />
                      
                <TouchableOpacity   
                    style={[Styles.buttonTone, Styles.buttonToneRegular]}                   
                    onPress={() =>  updateSign()}
                   >
                <Text  
                    style={[Styles.buttonToneText]}>Uppdatera
                 </Text>
                 </TouchableOpacity>

                <TouchableOpacity 
                    style={[Styles.buttonTone, Styles.buttonToneRegular]}
                    onPress={() =>  navigation.navigate('Home')}
                    >

                <Text 
                    style={[Styles.buttonToneText]}>Hem
                 </Text>
                 </TouchableOpacity>
      </ScrollView>
      </View>
      </View>
    )}