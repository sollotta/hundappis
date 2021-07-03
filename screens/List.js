import React, { useState, useEffect } from 'react';
import { 
    FlatList, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View
    } from 'react-native';

import Styles from '../Styles';
import { Searchbar } from 'react-native-paper';

export default function List ({navigation}){
    const [isLoading, setLoading] = useState(true);
    
// Searchbar funktion 
// useState initaliseras via array som skickar in ett variabelnamn samt en funtkion som setPost är för att förändra en variabel. 
// Genom att sätta en useEffect funktion som tar in hela api kan man lättare senare söka bland innehållet i api. 
// Här ovan finns den första isLoadingen på sidan och den fungerar som så att det står loading när data håller på att läses in. 

    const [searchQuery, setSearchQuery] = React.useState('');
    const [poster, setPoster] = React.useState([]);
  
    // end searchbar

    useEffect(() => {
        if (poster.length === 0){
            fetchData();
        }
    }, []);
        const fetchData = () => {
                fetch('https://hundappis.herokuapp.com/hundappis')
                    
                .then((response) => response.json())
                .then( data => {
                    console.log('data ', data);
                setPoster(data);
                })
                .catch((error) => 
                console.error(error))
               .finally(() => setLoading(false));
                }

// onChageSearch är kopplat till återuppringning som anropas när användaren matat in text i sökrutan. 
// filteredData filterar användarens information utan att ändra den grunddata som finns. Genom toLowerCase sätter man även en variabel att versaler eller gemener inte spelar någon roll. 
            const onChangeSearch = query => {
                console.log('query: ', query);
                setSearchQuery(query)
            }

            let filteredData = poster.filter(post => { 
            return (
                post.sign 
                .toLowerCase()
                .indexOf(searchQuery.toLowerCase()) !== -1
            )
            })

// SafeAreaView fungerade bättre att ha som en container runt hela. React native skriver dock att det är mer lämplig för iOS enheter. Vilket jag har. 
// Den kapslar innehållet och fungerar mer optimalt genom att återspegla appen bättre med rundade hörn etc, ivf enligt https://reactnative.dev/docs/safeareaview
// Även här som första sidan ligger navigation.navigate till Add sidan. 
// Däremot är varje rad i listan kopplats till detaillistan även det via funktionen navigation.navigate. 
// Genom keyExtractor och renderItem kan appen skriva ut varje enskild post från apiet. 
    return (
        <SafeAreaView style = {Styles.background}>
        <View style={Styles.container}>
 
            <Text style = {Styles.textHeading}>Ideé torka?
                </Text>
            <Text style = {Styles.textHeadingSmall}>Klicka för mer info på det som ser intressant ut. 
                </Text>
            {isLoading == true && <Text  style = {Styles.textBody}>Loading ...</Text>}

            <Searchbar
                onChangeText={onChangeSearch}
                value={searchQuery}   
                placeholder="Sök här..."
                />
                  <TouchableOpacity 
                style={[Styles.buttonTone, Styles.buttonToneRegular]}
                onPress={() => navigation.navigate('Add')}
                >
            <Text style={[Styles.buttonToneText]}>Lägg till
                </Text>
                </TouchableOpacity>

            <FlatList
                style = {Styles.listBody} 
                data ={filteredData}
                keyExtractor = {item => item._id.toString()}
                renderItem ={({item}) => 
            <Text onPress= { () => navigation.navigate('Detail', { itemId: item._id})}>
            <Text style = {Styles.textBody}>{item.sign}
                </Text>
                </Text>
      }
            />
     </View>
     </SafeAreaView>
    );
   
}

