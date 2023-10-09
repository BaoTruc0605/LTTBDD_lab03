import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './src/Screen01';
import Screen02 from './src/Screen02';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Screen01" component={Screen01}/>
                <Stack.Screen name="Screen02" component={Screen02}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

