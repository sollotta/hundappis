import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    SafeAreaView,
    ScrollView,   
    Alert 
} from 'react-native';

import Styles from '../Styles';
//Route Params passar paramentrar till route 
// Via useEffect funktion skapas en koppling mellan appen och mitt api genom id i apiet. Själva useEffect gör det möjligt att funktionen startas så fort komponenten laddats. 
// useState initaliseras via array som skickar in ett variabelnamn samt en funktion som setPost är för att förändra en variabel. 

export default function Detail ({ route, navigation}){
    const { itemId } = route.params;
    console.log('Detail', itemId);

        const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
   
            useEffect(() => {
                const API_URL = 'https://hundappis.herokuapp.com/hundappis/' + itemId;
                    fetch(API_URL)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(post);
                        setPost(responseJson)})

                    .catch((error) => 
                    console.error(error))
                    .finally(() => setLoading(false));                   
            }, []);
// const deleteSign är kopplat till delete knappen i return, för att just radera ett objekt i apiet. 
//Här är det även tillgagt en alertruta som uppmanar användaren att vara helt säker på det hela genom onpress funtkionen. Avbryt är kopplat till en inbygd funktion - cancel
//Ok texten är kopplat till Apiet genom method Delete. 
              const deleteSign = () => {
                  const API_URL = 'https://hundappis.herokuapp.com/hundappis/' + itemId;
                // console.log(itemId);
                    Alert.alert(
                        'Är du helt säker?', 
                        'Du kommer radera skylten', 
                        [
                           {
                                text: 'Avbryt',
                                onPress: () => console.log('Cancel'), 
                                style: 'cancel'
                                }, 
                            { text: 'OK', onPress: () => { 
                            fetch (API_URL, {
                                   method: 'DELETE'
                                }) 
                            .then(response => response.json()),
                            console.log('Nu tas den bort')
                            navigation.navigate('Home')
                            console.log('Radera nu!')}}
                            ], 
                            { cancelable: false}
                        );
            };

// return här nedan skriver ut innehållet i en vald skylt. 

    return (
        <SafeAreaView style = {Styles.background}>
        <ScrollView style={Styles.container}>
        {isLoading == true && <Text>Loading ...</Text>}

            <Text style = {Styles.textHeading}>Träna med störning!</Text>
  
            <Text style = {Styles.textHeadingSmall}>Övningens namn: 
                </Text>

            <Text style = {Styles.textBody}>{post.sign}
                </Text>

            <Text style = {Styles.textHeadingSmall}>Beskrivning: 
                </Text>

            <Text style = {Styles.textBody}>{post.description}
                </Text>
       
            <Text style = {Styles.textHeadingSmall}>Avencera i övningen: 
                </Text>

            <Text style = {Styles.textBody}>{post.advanced}
                </Text>

           <View style = {Styles.imageStyle}>
                <Image 
                style = {Styles.imageSize}
                source={{uri: post.img}} 
                /> 
            </View>
     
            <TouchableOpacity 
                style={[Styles.buttonTone, Styles.buttonToneDanger]}                     
                onPress={deleteSign}
                >
            <Text  style={[Styles.buttonToneText]}>Delete
                </Text>
                </TouchableOpacity>

            <TouchableOpacity 
                style={[Styles.buttonTone, Styles.buttonToneRegular]}
                onPress={() =>  navigation.navigate('Update', 
                {
                    itemId: post._id, 
                 })}
                >
            <Text style={[Styles.buttonToneText]}>Redigera
                </Text>
                </TouchableOpacity>

            {/* Knapp för att gå tillbaka!! */}
            <TouchableOpacity 
                style={[Styles.buttonTone, Styles.buttonToneRegular]}
                onPress={() =>  navigation.goBack()}
                >
           <Text style={[Styles.buttonToneText]}>Tillbax till listan
                </Text>
                </TouchableOpacity>
                <Text style = {Styles.textHeadingSmall}>Ha en god träning med glädje och fart!              
                </Text>

     </ScrollView>
     </SafeAreaView>
    );
}


