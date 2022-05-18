import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PlusTag = () => {
  return (
    <View style={styles.container}>
      <Text>PlusTag</Text>
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

export default PlusTag;