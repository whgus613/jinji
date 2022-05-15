import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tag = () => {
  return (
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.titleTxt}>#데이트</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.storeView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/새벽.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.txtView}>
          <Text style={styles.nameTxt}>새벽</Text>
          <Text style={styles.stateTxt}>영업중</Text>
          <Text style={styles.etcTxt}>매일 10:30~21:30</Text>
          <View style={styles.gapView}></View>
          <Text style={styles.etcTxt}>제주 제주시 산천단동 2길 24</Text>
          <Text style={styles.etcTxt}>064-1234-5678</Text>
        </View>
      </View>

      <View style={styles.storeView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/새벽.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.txtView}>
          <Text style={styles.nameTxt}>새벽</Text>
          <Text style={styles.stateTxt}>영업중</Text>
          <Text style={styles.etcTxt}>매일 10:30~21:30</Text>
          <View style={styles.gapView}></View>
          <Text style={styles.etcTxt}>제주 제주시 산천단동 2길 24</Text>
          <Text style={styles.etcTxt}>064-1234-5678</Text>
        </View>
      </View>
      <AntDesign name="pluscircle" size={40} color="#DA7469" style={{position: 'absolute', left: '90%', bottom: '5%'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 5
  },
  titleView: {
  },
  titleTxt: {
    fontSize: 17,
    color: '#C7382A'
  },
  line: {
    backgroundColor: '#C3C3C3',
    height: 3,
    marginVertical: 8,
    borderRadius: 10
  },
  storeView: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10
  },
  imageView: {
    marginRight: 10
  },
  imageStyle: {
    width: 170,
    height: 135,
    borderRadius: 10
  },
  txtView: {
    
  },
  nameTxt: {
    fontSize: 20,
    marginBottom: 3
  },
  stateTxt: {
    color: '#C7382A', 
    fontSize: 15
  },
  etcTxt: {
    marginVertical: 1
  },
  gapView: {
    height: 20
  }
});

export default Tag;