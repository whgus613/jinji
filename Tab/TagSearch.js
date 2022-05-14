import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const TagSearch = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='분류, 태그 검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          marginBottom: 25,
          borderRadius: 20
          }}
      />

      <View style={styles.titleView}>
        <Text style={styles.title}>목적</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.tagView}>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#아침식사</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#점심식사</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#저녁식사</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#친구</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#가족</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#브런치</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#술모임</Text>
        </View>
      </View>
      <View style={styles.plusView}>
        <AntDesign name="pluscircle" size={28} color="#DA7469" style={{marginTop: -10}} />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.title}>분위기</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.tagView}>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#로맨틱한</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#격식있는</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#시끌벅적한</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#깔끔한</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#아늑한</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#뒤풀이</Text>
        </View>
      </View>
      <View style={styles.plusView}>
        <AntDesign name="pluscircle" size={28} color="#DA7469" style={{marginTop: -10}} />
      </View>
      
      <View style={styles.titleView}>
        <Text style={styles.title}>편의시설</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.tagView}>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#와이파이</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#애완동물</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#24시간영업</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#대형룸</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#놀이방</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#개별룸</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTxt}>#넓은테이블</Text>
        </View>
      </View>
      <View style={styles.plusView}>
        <AntDesign name="pluscircle" size={28} color="#DA7469" style={{marginTop: -10}} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 30
  },
  titleView: {
    marginLeft: 5
  },
  title: {
    fontSize: 18
  },
  line: {
    backgroundColor: "#EFEFEF",
    height: 2,
    marginVertical: 10,
    borderRadius: 10
  },
  tagView: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    paddingHorizontal: 15,
    backgroundColor: "#C3C3C3",
    marginRight: 10,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  tagTxt: {
    fontSize: 15,
    color: "white"
  },
  plusView: {
    marginBottom: 20
  },

});

export default TagSearch;