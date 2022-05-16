import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const DetailFollow = () => {
  return (
    <View style={styles.container}>
    <View style={styles.profileView}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={require("../sampleImg/프로필.jpg")}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.followView}>
        <View style={styles.textView}>
            <Text style={styles.profileTxt}>쩝쩝박사</Text>
            <View style={styles.followTag}>
              <Text style={styles.followTxt}>팔로우</Text>
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
    <ScrollView>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 30
      },
      profileView: {
        paddingVertical: 15,
        justifyContent: 'space-around',
        alignContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 5,
        borderBottomColor: '#C3C3C3',
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
      followView: {
        width: '60%',
        marginBottom: 10
      },
      textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -5
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
      
});

export default DetailFollow;