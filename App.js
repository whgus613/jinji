import { NavigationContainer } from "@react-navigation/native";
import {View, Image, StyleSheet} from 'react-native';
import Root from "./Nav/Root";
import React, {useEffect, useState} from 'react';

const App = () => {

  const[loading, setLoading] = useState(true);

  const getReady = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }
  

  useEffect(()=> {
    getReady();
  }, []);


  return loading ? (
    <View style={styles.loadingView}>
      <Image
            resizeMode={"cover"}
            source={require("./sampleImg/로고.png")}
            style={styles.imageStyle}></Image>
    </View>
  ):(
    <NavigationContainer>
        <Root />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 250
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;