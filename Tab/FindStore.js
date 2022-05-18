import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const FindStore = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='식당명, 주소 검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          marginBottom: 30,
          borderRadius: 20
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 30,
    alignContent: 'flex-start',
    height: '100%'
  },
});

export default FindStore;