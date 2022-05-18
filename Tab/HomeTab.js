import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const HomeTab = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
    <MapView
      style={styles.map}
      provide={PROVIDER_GOOGLE}
      region={{
        latitude: 33.45594224084678,
        longitude: 126.56190413060305,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}>
      
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: "100%"
  },
  searchStyle:{
    position: 'absolute'
  }
});

export default HomeTab;