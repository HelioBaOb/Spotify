import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { AntDesign } from '@expo/vector-icons';
import { StackMain, TabNavigator } from './navigation/MainNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
        
        <TabNavigator/>

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
