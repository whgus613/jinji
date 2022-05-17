import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const NotVisitReview = () => {
  return (
    <View style={styles.container}>
      <Text>NotVisitReview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotVisitReview;