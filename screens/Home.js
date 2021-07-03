import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    Image,
    SafeAreaView,
    ScrollView
    } from 'react-native';
    
import Styles from '../Styles';
 
// På home sidan har jag valt att inte koppla genom att lista etc något utan mer koppla två knappar till två olika sidor genom att använda navigation.navigate. 

export default function Home ({navigation}){
    return (
        <SafeAreaView style = {Styles.background}> 
        <ScrollView style={Styles.container}>
      
            <Image 
            style = {Styles.imageSize}
            source={require('../assets/img/gloria.png')} 
             /> 
             <Text style={Styles.textHeading}>Störningsträningstips!
                </Text>
             
      
            <Text style={Styles.textHeadingSmall}>Alla kan få ideétorka när det gäller hundträning. Här får du lite tips/inspiration.
                </Text>
            <TouchableOpacity 
                style={[Styles.buttonTone, Styles.buttonToneRegular]}
                onPress={() => navigation.navigate('List')}
            > 
                <Text style={[Styles.buttonToneText]}>Klicka här
                    </Text>
                    </TouchableOpacity>

            <Text style={Styles.textHeadingSmall}>Vill du vara med och bygga upp en liten idebank?
                </Text> 

            <TouchableOpacity 
                style={[Styles.buttonTone, Styles.buttonToneRegular]}
                onPress={() => navigation.navigate('Add')}
                >
            <Text style={[Styles.buttonToneText]}>Lägg till
                </Text>
                </TouchableOpacity>
                
        </ScrollView>
        </SafeAreaView>
    );
}

