import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from "./Menu";
import Local from "./Local";
import Tag from "./Tag";

const trdTab = createMaterialTopTabNavigator();

const NotVisit = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='장소, 동네, 태그 검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          marginBottom: 20,
          borderRadius: 20
          }}
      />
      <trdTab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: {
            borderWidth: 1,
            borderColor: '#69B1DA',
          },
          tabBarIndicatorStyle: {
            borderWidth: 25,
            borderColor: '#69B1DA',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#69B1DA',
        }}>
        <trdTab.Screen name="Menu" component={Menu}></trdTab.Screen>
        <trdTab.Screen name="Local" component={Local}></trdTab.Screen>
        <trdTab.Screen name="Tag" component={Tag}></trdTab.Screen>
      </trdTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 5
  },
});

export default NotVisit;