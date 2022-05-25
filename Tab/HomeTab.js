import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import * as Location from 'expo-location';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const weatherIcon = [
  "white-balance-sunny",
  "weather-cloudy",
  "weather-rainy",
  "weather-snowy",
  "weather-lightning",
  "weatehr-fog"
];
let iconName;
let dayName;




const HomeTab = () => {

  const API_KEY = "973bdd1aec62cd3610061187b566f900";

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [city, setCity] = useState("");
  const [tw, setTw] = useState();
  const [rw, setRw] = useState();

  const getIconName = (code) => {
    if (code === "Clear") {
        return weatherIcon[0];
    } else if (code === "Clouds") {
        return weatherIcon[1];
    } else if (code === "Rain") {
        return weatherIcon[2];
    } else if (code === "Snow") {
        return weatherIcon[3];
    } else if (code === "Thunderstorm") {
        return weatherIcon[4];
    } else {
        return weatherIcon[5];
    }
}; 

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setLoading(false);
    }
    
    const location = await Location.getCurrentPositionAsync({})

    setLocation(location);

    const place = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude : location.coords.longitude
    });

    place.find ( p => {
      street = p.street
      setCity(p.street)
    })

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    
    setLatitude(latitude);
    setLongitude(longitude);
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts&appid=${API_KEY}`
    )

    const json = await response.json();

    console.log(json)
    console.log(json.current)
    setTw(json)

    console.log(tw)

    setRw(tw.current.weather[0].main)

    //setRw(tw.current.weather[0].main);
    
    //console.log();


    return setLoading(false);
  };


  useEffect(() => {
    getLocation();
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
        <View style ={styles.localView}>
          <Icon name={getIconName(rw)} size={20} color="black" />
          <Text style = {styles.etcTxt}>{tw.current.temp}°C</Text>
          <Text style = {styles.etcTxt}>{city}</Text>
        </View>
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
  },
  localView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeTab;