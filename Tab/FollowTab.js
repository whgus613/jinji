import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';

const FollowTab = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='ID, 닉네임, 태그 검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          marginBottom: 30,
          borderRadius: 20
          }}
      />
    <ScrollView>
      <View style={styles.profileView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/프로필.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.textView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailFollow")}>
            <Text style={styles.profileTxt}>쩝쩝박사</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <View style={styles.tagView}>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>#데이트</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>#양식</Text>
            </View>
          </View>
          <Text style={styles.word}>숨은 맛집 찾아다녀요~!</Text>
          <View style={styles.followView}>
            <TouchableOpacity onPress={() => toggleFunction()}>
              { toggle ? (
                <View style={styles.followTag}>
                  <Text style={styles.followTxt}>팔로우</Text>
                </View>
              ) : (
                <View style={styles.rFollowTag}>
                  <Text style={styles.rFollowTxt}>팔로우</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.profileView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/프로필2.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.textView}>
          <Text style={styles.profileTxt}>맛나맛나</Text>
          <View style={styles.line}></View>
          <View style={styles.tagView}>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>#가성비</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>#지역맛집</Text>
            </View>
          </View>
          <Text style={styles.word}>모임 장소 걱정 끝 ㅎㅎ</Text>
          <View style={styles.followView}>
            <View style={styles.followTag}>
              <Text style={styles.followTxt}>팔로우</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.profileView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/프로필3.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.textView}>
          <Text style={styles.profileTxt}>구맛집전문가</Text>
          <View style={styles.line}></View>
          <View style={styles.tagView}>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>#친구</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>#맛집</Text>
            </View>
          </View>
          <Text style={styles.word}>여기가 내 나와바리</Text>
          <View style={styles.followView}>
            <View style={styles.followTag}>
              <Text style={styles.followTxt}>팔로우</Text>
            </View>
          </View>
        </View>
      </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 30
  },
  profileView: {
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#C3C3C3',
    borderRightColor: '#C3C3C3',
    borderRightWidth: 1,
    borderRadius: 20,
    borderLeftColor: '#C3C3C3',
    borderLeftWidth: 0.5,
    marginBottom: 20
  },
  imageView: {
    marginHorizontal: 10
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 0.5
  },
  textView: {
    width: '60%'
  },
  profileTxt: {
    fontSize: 17
  },
  line: {
    backgroundColor: "gray",
    height: 0.75,
    marginVertical: 10,
  },
  tagView: {
    marginVertical: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    paddingHorizontal: 10,
    borderColor: "#DA7469",
    borderWidth: 1,
    marginRight: 5,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  tagTxt: {
    fontSize: 13,
    color: "#DA7469"
  },
  word: {
    fontSize: 15
  },
  followView: {
    flexDirection: "row-reverse",
    marginTop: 5
  },
  followTag: {
    paddingHorizontal: 10,
    backgroundColor: "#69B1DA",
    marginRight: 5,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  followTxt: {
    color: "white"
  },
  rFollowTag: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginRight: 5,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10,
    borderColor: '#69B1DA',
    borderWidth: 1
  },
  rFollowTxt: {
    color: "#69B1DA"
  },
});

export default FollowTab;