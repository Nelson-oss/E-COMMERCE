import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Login from './PAGES/Login';
import Home from './PAGES/Home';



export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Login">
        <MainNavigator.Screen name="Login"component={Login}/>
        <MainNavigator.Screen name="Home"component={Home}/> 
        </MainNavigator.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
