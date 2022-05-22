import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Nav/Root";
import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';

const App = () => {

  return(
    <NavigationContainer>
        <Root />
    </NavigationContainer>
  )
}

export default App;