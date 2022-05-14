import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Nav/Root";

const App = () => {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
}

export default App;