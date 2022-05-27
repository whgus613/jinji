import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeSample = () => {

const [searchQuery, setSearchQuery] = useState('');
const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder='식당명 검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          borderRadius: 20,
          marginHorizontal: 30,
          marginTop: 60,
          width: 350,
          zIndex: 10,
          position: 'absolute'
        }}
      />
      <MapView
        style={styles.map}
        provide={PROVIDER_GOOGLE}
        region={{
          latitude: 33.45608763624372,
          longitude: 126.56158878351617,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}>
      <Marker
        coordinate={{latitude: 33.45608763624372, longitude: 126.56158878351617}} >
        <Image source = {require('../sampleImg/GPS.png')} style={{height: 45, width: 45,}} />
      </Marker>
      </MapView>
      <TouchableOpacity>
        <View style = {styles.weatherView}>
            <Text style = {styles.etcTxt}>오늘의 추천</Text>
            <View style = {styles.line} />
            <View style ={styles.localView}>
            <MaterialCommunityIcons name="white-balance-sunny" size={24} color="black" />
            <Text style = {styles.etcTxt}>19°C</Text>
            <Text style = {styles.etcTxt}>아라동</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  map: {
    height: "100%",
  },
  weatherView: {
    backgroundColor: '#fff',
    width: 400,
    height: 400,
    borderRadius: 30,
    position: 'absolute',
    bottom: '-10%',
    left: '1%',
    borderColor: '#C3C3C3',
    borderWidth: 0.5,
    paddingTop: 20,
    paddingHorizontal: 30
  },
  etcTxt: {
    fontSize: 17
  },
  line: {
    width: '100%',
    backgroundColor: 'black',
    height: 1,
    marginVertical: 10
  },
  localView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeSample;