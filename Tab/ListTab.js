import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Visit from "./Visit";
import NotVisit from './NotVisit.js';

const semiTab = createMaterialTopTabNavigator();

const ListTab = () => {
  return (
    <View style={styles.container}>
      <semiTab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarIndicatorStyle:
          {
             backgroundColor: '#C3C3C3' 
          }
            }}>
        <semiTab.Screen name="가본 곳" component = {Visit}></semiTab.Screen>
        <semiTab.Screen name="가고싶은 곳" component={NotVisit}></semiTab.Screen>
      </semiTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 30
  },
});

export default ListTab;