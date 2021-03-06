import { StyleSheet, Text, View, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react';


const DetailStore = ({route, navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity>
            <Entypo name="share" size={24} color="#707070" style={{marginRight: 10}} />
          </TouchableOpacity>
        </View>
    });
  }, []);

  const {
    params: {contents, data}
  } = route;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            resizeMode={"cover"}
            source={{
              uri: `http://203.253.207.111:8080/jsmith_image${contents.ccnt_m_img[0]}`
            }}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{contents.ccnt_name}</Text>
        </View>
        <View style={styles.etcView}>
          <View style={styles.stateView}>
            <Text style={styles.etcTxt}>{contents.ccnt_op_time}</Text>
            <Text style={styles.etcTxt}>{contents.ccnt_addr}</Text>
            <Text style={styles.etcTxt}>{contents.ccnt_tel}</Text>
          </View>
          {/*<View style={styles.distView}>
            <Text style={styles.distTxt}>1.7km</Text>
          </View>*/}
        </View>
        <View style={styles.line}></View>
        <View style={styles.linkView}>
          <Text style={styles.etcTxt}>상세정보</Text>
          <Text style={styles.linkTxt}>{contents.ccnt_rcmd_comt}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.starpointView}>
          <Text style={styles.etcTxt}>별점</Text>
          <View style={styles.starView}>
            <AntDesign name="star" size={24} color="#C7382A"/>
            <AntDesign name="star" size={24} color="#C7382A" />
            <AntDesign name="star" size={24} color="#C7382A" />
            <AntDesign name="star" size={24} color="#C7382A" />
            <AntDesign name="staro" size={24} color="#C7382A" />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.tagView}>
          <View style={styles.tag}>
            <Text style={styles.tagTxt}>#브런치</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagTxt}>#친구와함께</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagTxt}>#가벼운</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.reviewView}>
          <Text style={styles.title}>리뷰</Text>
        </View>

        <View style={styles.userView}>
          <View style={styles.userImgView}>
            <Image
              resizeMode={"cover"}
              source={require("../sampleImg/프로필.jpg")}
              style={styles.userImageStyle}></Image>
          </View>
          <View style={styles.userNameView}>
            <Text style={styles.userName}>쩝쩝박사</Text>
            <Text style={styles.userTxt}>브런치로 먹기에 양과 가격 다 적당함!</Text>
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={styles.userView}>
          <View style={styles.userImgView}>
            <Image
              resizeMode={"cover"}
              source={require("../sampleImg/프로필2.jpg")}
              style={styles.userImageStyle}></Image>
          </View>
          <View style={styles.userNameView}>
            <Text style={styles.userName}>맛나맛나</Text>
            <Text style={styles.userTxt}>매장이 예쁘고 분위기도 좋아서 친구랑 가기 좋을 듯.</Text>
          </View>
        </View>
        <View style={styles.line}></View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30
  },
  imageView: {
    
  },
  imageStyle: {
    width: 330,
    height: 220
  },
  titleView: {
    marginTop: 30,
    marginBottom: 20
  },
  title: {
    fontSize: 23
  },
  etcView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  stateView: {
    
  },
  stateTxt: {
    fontSize: 18,
    color: '#C7382A'
  },
  etcTxt: {
    fontSize: 18,
    marginBottom: 7
  },
  distView: {

  },
  distTxt: {
    fontSize: 15
  },
  line: {
    backgroundColor: '#C3C3C3',
    height: 2,
    marginVertical: 20,
    width: '100%'
  },
  linkView: {
    //flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20
  },
  linkTxt: {
    color: 'black',
    fontSize: 16,
    marginTop: 10
  },
  starpointView: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 40,
  },
  starView: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  tagView: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    marginLeft: 40,
    justifyContent: 'flex-start',
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
  reviewView: {
    width: '100%',
    marginLeft: 40,
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  userView: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5
  },
  userImgView: {
    marginHorizontal: 10
  },
  userImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 0.5
  },
  userNameView: {
    width: '60%'
  },
  userName: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500'
  },
  userTxt: {
    fontSize: 15
  }
});

export default DetailStore;