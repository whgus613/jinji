import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import LocalModule from './LocalModule';
import { AntDesign } from '@expo/vector-icons';

const SearchSample = ({navigation}) => {

    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
};

  const [loading, setLoading] = useState(true);
  const [wholeData, setWholeData] = useState([]);

    let contents = [];

    const getContents = async () => {
        const results = await(await fetch("http://203.253.207.111:8080/jsmith/restful/content?type=1&page=1&ccd=B2")).json();
        
        const preData = results.filter((data) => {
            const add = data.ccnt_addr;
            const code = data.ccnt_m_img;
            return (add.includes('조천읍') && code !== ""); 
        });

        for (let i=0; i<preData.length; i++){
            contents[i]=preData[i];
            contents[i].ccnt_m_img = contents[i].ccnt_m_img.split(",");
        }

        setWholeData(contents);
        setLoading(false);
    };

    useEffect(()=> {
        getContents();
    }, []);



  return loading ? (
  
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <Text></Text>
    </View>
    
    ) : (
    <View style={styles.container}>
    <ScrollView>
      <View style = {styles.titleView}>
        <Text style = {styles.title}>추천 태그</Text>
      </View>
      <View style = {styles.tagView}>
        <View style = {styles.tags}>
          <Text style = {styles.tagtext}>분위기좋은</Text>
        </View>
        <View style = {styles.tags}>
          <Text style = {styles.tagtext}>소개팅</Text>
        </View>
        <View style = {styles.tags}>
          <Text style = {styles.tagtext}>번개</Text>
        </View>
        <View style = {styles.tags}>
          <Text style = {styles.tagtext}>데이트</Text>
        </View>
        <View style = {styles.tags}>
          <Text style = {styles.tagtext}>화장실남녀구분</Text>
        </View>
      </View>
      <View style = {styles.line}></View>
      <View style = {styles.titleView}>
        <Text style = {styles.title}>지역별</Text>
      </View>
      <View>
          <LocalModule />
      </View>
      
      <View>
        
        {wholeData.map((image)=>{
          return(
            <TouchableOpacity
              key={image.ROWNUM}
              onPress={() => navigation.navigate("DetailStore", {
                contents: image,
                data: wholeData
              })}  
            >
            <View style={styles.storeView}>
              <View style={styles.imageView}>
              <Image
                  resizeMode={"cover"}
                  source={{
                    uri: `http://203.253.207.111:8080/jsmith_image${image.ccnt_m_img[0]}`
                  }}
                  style={styles.imageStyle}></Image>
              </View>
              <View style={styles.txtView}>
                <Text style={styles.nameTxt}>{image.ccnt_name}</Text>
                <Text style={styles.etcTxt}>{image.ccnt_op_time}</Text>
                <View style={styles.gapView}></View>
                <Text style={styles.etcTxt}>{image.ccnt_addr}</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text style={styles.etcTxt}>{image.ccnt_tel}</Text>
                    <TouchableOpacity onPress={() => toggleFunction()}>
                        {toggle ? (
                            <View style={{marginRight: 11}}>
                                <AntDesign name="hearto" size={24} color="#C7382A" />
                            </View>
                        ) : (
                            <View style={{marginRight:11}}>
                                <AntDesign name="heart" size={24} color="#C7382A" />
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          );
        })}

      </View>


      <View style = {styles.line}></View>
      <View style = {styles.chevronView}>
        <Text style = {styles.title}>메뉴별 검색</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuSearch")}>
        <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style = {styles.line}></View>
      <View style = {styles.chevronView}>
        <Text style = {styles.title}>태그 검색</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("TagSearch")}>
        <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 30
  },
  titleView: {
    marginVertical: 10
  },
  title: {
    fontSize: 23
  },
  tagView:{
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tags: {
    paddingHorizontal: 15,
    backgroundColor: "#C3C3C3",
    marginRight: 10,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  tagtext: {
    fontSize: 15,
    color: "white"
  },
  line: {
    backgroundColor: "#EFEFEF",
    height: 5,
    marginVertical: 15,
    borderRadius: 10
  },
  viewContainer: {
    flex: 1, 
    backgroundColor: '#FFF',
  },
  dropdownsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    marginVertical: 10
  },
  dropdownBtnStyle: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#444',
  },
  txtStyle: {
    color: '#444',
    textAlign: 'left'
  },
  dropdownDropdownStyle: {
    backgroundColor: '#EFEFEF',
    marginTop: -40
  },
  divider: {
    width: 12
  },
  chevronView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  storeView: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
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
    flexShrink: 1
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
    marginVertical: 1,
  },
  gapView: {
    height: 5
  },
  buttonView: {
    position: 'absolute',
    bottom: '5%',
    right: '2%',  
  },
  button1: {  
    
  },
  button2: {
    position: 'absolute',
    right: -5,
    bottom: -10,
    marginBottom: 5
  },
  writeView: {
    flexDirection: 'row',
    width: 250,
    height: 80,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  selectView: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  selectTxt: {
    fontSize: 16,
  },
  line2: {
    height: 2,
    backgroundColor: '#C3C3C3',
    marginVertical: 5,
    width: 170
  },
});

export default SearchSample;