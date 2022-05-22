import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const HomeTab = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
    <Searchbar
        placeholder='식당명 검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          position: 'absolute',
          top: '8%',
          marginHorizontal: 30,
          borderRadius: 20
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
    zIndex: 10
  },
  searchStyle:{
    position: 'absolute'
  }
});

export default HomeTab;