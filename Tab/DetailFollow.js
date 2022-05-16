import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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

      <ScrollView indicatorStyle>

      <View>
        <View style={styles.storeView}>
          <View style={styles.storeImgView}>
            <Image 
              resizeMode={"cover"}
              source={require("../sampleImg/백일흑야.jpg")}
              style={styles.storeImgStyle}></Image>
          </View>
          <View style={styles.storeTxtView}>
          <View style={styles.storeTitleView}>
            <Text style={styles.storeTitle}>백일흑야</Text>
            <AntDesign name="hearto" size={24} color="#C7382A" />
          </View>
          <View style={styles.storeTagView}>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#친구</Text>
            </View>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#칭따오</Text>
            </View>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#아시안</Text>
            </View>
           </View>
          </View>
        </View>
        <View style={styles.reviewView}>
          <Text style={styles.reviewTxt}>
              왕치킨가스 덮밥과 쇠고기 전병이 맛있다. 세트 메뉴 적극적으로 활용하는 것도 좋을 듯! {"\n"}
              칭따오와 함께 먹을 것을 추천!!
          </Text>
        </View>
        <View style={styles.line2}></View>
      </View>


      <View>
        <View style={styles.storeView}>
          <View style={styles.storeImgView}>
            <Image 
              resizeMode={"cover"}
              source={require("../sampleImg/백일흑야.jpg")}
              style={styles.storeImgStyle}></Image>
          </View>
          <View style={styles.storeTxtView}>
          <View style={styles.storeTitleView}>
            <Text style={styles.storeTitle}>백일흑야</Text>
            <AntDesign name="hearto" size={24} color="#C7382A" />
          </View>
          <View style={styles.storeTagView}>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#친구</Text>
            </View>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#칭따오</Text>
            </View>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#아시안</Text>
            </View>
           </View>
          </View>
        </View>
        <View style={styles.reviewView}>
          <Text style={styles.reviewTxt}>
              왕치킨가스 덮밥과 쇠고기 전병이 맛있다. 세트 메뉴 적극적으로 활용하는 것도 좋을 듯! {"\n"}
              칭따오와 함께 먹을 것을 추천!!
          </Text>
        </View>
        <View style={styles.line2}></View>
      </View>


      <View>
        <View style={styles.storeView}>
          <View style={styles.storeImgView}>
            <Image 
              resizeMode={"cover"}
              source={require("../sampleImg/백일흑야.jpg")}
              style={styles.storeImgStyle}></Image>
          </View>
          <View style={styles.storeTxtView}>
          <View style={styles.storeTitleView}>
            <Text style={styles.storeTitle}>백일흑야</Text>
            <AntDesign name="hearto" size={24} color="#C7382A" />
          </View>
          <View style={styles.storeTagView}>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#친구</Text>
            </View>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#칭따오</Text>
            </View>
            <View style={styles.storeTag}>
              <Text style={styles.storeTagTxt}>#아시안</Text>
            </View>
           </View>
          </View>
        </View>
        <View style={styles.reviewView}>
          <Text style={styles.reviewTxt}>
              왕치킨가스 덮밥과 쇠고기 전병이 맛있다. 세트 메뉴 적극적으로 활용하는 것도 좋을 듯! {"\n"}
              칭따오와 함께 먹을 것을 추천!!
          </Text>
        </View>
        <View style={styles.line2}></View>
      </View>


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
      storeView: {
        flexDirection: 'row',
      },
      storeImgView: {
        marginRight: 20
      },
      storeImgStyle: {
        width: 170,
        height: 130,
      },
      storeTxtView: {
        flexDirection: 'column',
        width: '65%'
      },
      storeTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '70%'
      },
      storeTitle: {
        fontSize: 19
      },
      storeTagView: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '60%'
      },
      storeTag: {
        paddingHorizontal: 10,
        borderColor: "#DA7469",
        borderWidth: 1,
        marginRight: 5,
        height: 25,
        borderRadius: 20,
        justifyContent: 'center',
        marginBottom: 10
      },
      storeTagTxt: {
        fontSize: 13,
        color: "#DA7469"
      },
      reviewView: {
        marginVertical: 20,
      },
      reviewTxt: {
        lineHeight: 20
      },
      line2: {
        backgroundColor: '#C3C3C3',
        height: 3,
        marginBottom: 20
      }
});

export default DetailFollow;