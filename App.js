import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TopTab from "./Nav/TopTab";

const App = () => {
  return (
    <NavigationContainer>
      <TopTab />
    </NavigationContainer>
  );
}

export default App;