import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const HomeTab = () => {

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
          latitude: 33.45594224084678,
          longitude: 126.56190413060305,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }} />
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: "100%",
  },
});

export default HomeTab;