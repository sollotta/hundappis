import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//alla screens importeras in här och visas genom React Native navigator genom koden i return. 
import Home from './screens/Home';
import List from './screens/List';
import Detail from './screens/Detail';
import Add from './screens/Add';
import Update from './screens/Update';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Update" component={Update} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

