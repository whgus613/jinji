import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const NotVisitReview = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.listView}>
        <Text style={styles.listTxt}>식당 찾기</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("FindStore")}>
          <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTxt}>태그, 카테고리 추가</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("PlusTag")}>
            <AntDesign name="plus" size={24} color="gray" />
          </TouchableOpacity>
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
    alignContent: 'flex-start'
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: "#C3C3C3",
    paddingVertical: 20
  },
  listTxt: {
    fontSize: 18
  }
});

export default NotVisitReview;