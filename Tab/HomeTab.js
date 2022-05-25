import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import * as Location from 'expo-location';

const HomeTab = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      
      setLatitude(latitude);
      setLongitude(longitude);
      setLoading(false);

    })();

  }, []);

  return loading ? (
    <View style={{flex: 1}}>

    </View>
  ) : (
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
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}>
      <Marker
        coordinate={{latitude: parseFloat(latitude), longitude: parseFloat(longitude)}} >
        <Image source = {require('../sampleImg/GPS.png')} style={{height: 45, width: 45,}} />
      </Marker>
      </MapView>
      <View style = {styles.weatherView}>
        <Text style = {styles.etcTxt}>오늘의 추천</Text>
        <View style = {styles.line} />
      </View>
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
    height: 150,
    borderRadius: 30,
    position: 'absolute',
    bottom: '-5%',
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
  }
});

export default HomeTab;