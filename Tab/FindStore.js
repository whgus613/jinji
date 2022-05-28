import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

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
          borderRadius: 20,
          marginBottom: 20
          }}
      />
    <View style={styles.line}></View>
    <View style = {styles.searchView}>
      <Entypo name="location-pin" size={30} color="gray" />
      <Text style = {styles.storeTxt}>MALMA</Text>
      <Text style = {styles.storeTxt}>9.7km</Text>
    </View>
    <View style = {styles.searchView}>
      <Entypo name="location-pin" size={30} color="gray" />
      <Text style = {styles.storeTxt}>레드피아노</Text>
      <Text style = {styles.storeTxt}>11.3km</Text>
    </View>
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
  line: {
    height: 3,
    backgroundColor: '#C3C3C3',
  },
  searchView: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 2
  },
  storeTxt: {
    fontSize: 17
  },
  line2: {
    height: 2,
    backgroundColor: '#C3C3C3',
    marginVertical: 10
  },
});

export default FindStore;