import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const VisitReview = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.tag}>
              <Text style={styles.tagTxt}>완료</Text>
            </View>
          </TouchableOpacity>
        </View>
    });
  }, []);

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <Feather name="camera" size={70} color="#bbbbbb" style={{paddingHorizontal: 30, paddingVertical: 15, borderWidth: 1, width: 130}} />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>식당 찾기</Text>
        <TouchableOpacity onPress={() => navigation.navigate("FindStore")}>
        <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>태그, 카테고리 추가</Text>
        <TouchableOpacity onPress={() => navigation.navigate("PlusTag")}>
        <AntDesign name="plus" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>제목</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#707070"}
        multiline={true}
        placeholder="방문하신 식당의 후기를 작성해주세요."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <View style = {styles.gapView} />
      <View style={styles.line}></View>
      <AirbnbRating 
        style = {styles.ratingView}
        selectedColor = "#C7382A"
        reviewSize={0}
        size={35}
        starContainerStyle={{width: '100%', justifyContent: 'space-between'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    width: '100%',
    height: '100%'
  },
  cameraView: {
    width: '100%',
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#C3C3C3",
  },
  etcView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C3C3C3",
    paddingVertical: 20,
    width: '100%'
  },
  etcTxt: {
    fontSize: 20
  },
  input: {
    height: 60,
    fontSize: 18,
    flexShrink: 1,
    paddingHorizontal: 5
  },
  gapView: {
    height: 270,
  },
  line: {
    borderWidth: 0.5,
    width: '100%'
  },
  ratingView: {
    marginVertical: 30,
    marginHorizontal: 20,
    width: '100%',
  },
  tag: {
    paddingHorizontal: 10,
    borderColor: "#DA7469",
    borderWidth: 1,
    marginRight: 5,
    height: 27,
    borderRadius: 20,
    justifyContent: 'center',
  },
  tagTxt: {
    fontSize: 14,
    color: "#DA7469"
  },
});

export default VisitReview;