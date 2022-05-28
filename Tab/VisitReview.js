import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const VisitReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <Feather name="camera" size={70} color="#bbbbbb" style={{marginHorizontal: 30, marginVertical: 15}} />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>약관 및 정책</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  cameraView: {
    borderWidth: 1
  },
  etcView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C3C3C3",
    paddingVertical: 20
  },
  etcTxt: {
    fontSize: 20
  }
});

export default VisitReview;