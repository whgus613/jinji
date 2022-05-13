import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const MyTab = () => {
  return (
    <View style={styles.container}>

      <View style={styles.profileView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/프로필.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.textView}>
          <View style = {styles.editView}>
            <Text style={styles.profileTxt}>쩝쩝박사</Text>
            <View style={styles.editTag}>
              <AntDesign name="edit" size={15} color="#3D3D3D" />
              <Text style={styles.editTxt}>수정</Text>
            </View>
          </View>
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
          </View>
          </View>

      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>공지사항</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>이벤트</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>고객센터</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>환경설정</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
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
    paddingTop: 80,
    paddingHorizontal: 30
  },
  profileView: {
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#C3C3C3',
    paddingBottom: 20
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
  editView:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: "#707070",
    borderWidth: 1,
    marginRight: 5,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  editTxt: {
    fontSize: 13,
    color: "#707070",
    marginLeft: 3
  },
  line: {
    backgroundColor: "gray",
    height: 0.75,
    marginVertical: 5,
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

export default MyTab;