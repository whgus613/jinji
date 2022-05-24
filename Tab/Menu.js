import { StatusBar } from 'expo-status-bar';
import react, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Menu = ({navigation}) => {

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
            const code = data.hcnt_sub_img;
            return code !== ""; 
        });

        for (let i=0; i<preData.length; i++){
            contents[i]=preData[i]; 
            contents[i].ccnt_m_img = contents[i].ccnt_m_img.split(",");
            contents[i].ccnt_addr = contents[i].ccnt_addr.substr(8);
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
    <View style = {styles.container}>
      <ScrollView>

      <View style={styles.titleView}>
        <Text style={styles.titleTxt}>양식</Text>
      </View>
      <View style={styles.line}></View>

      <View>
        
        {wholeData.map((image)=>{
          return(
            <TouchableOpacity  key={image.ROWNUM}>
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
                <Text style={styles.etcTxt}>{image.ccnt_tel}</Text>
              </View>
            </View>
          </TouchableOpacity>
          );
        })}

      </View>

      </ScrollView>



      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => toggleFunction()}>
          {toggle ? (
            <AntDesign name="pluscircle" size={45} color="#DA7469" style={styles.button1}/>
          ) : (
            <View style={styles.writeView}>
              <View style={styles.selectView}>
                <TouchableOpacity onPress={() => navigation.navigate("식당 리뷰하기")}>
                  <View style={{flexDirection: 'row'}}>
                  <Feather name="check" size={22} color="gray" style={{marginRight: 15}} />
                  <Text style={styles.selectTxt}>방문한 곳 등록</Text>
                  </View>
                </TouchableOpacity>
                
                <View style={styles.line2}></View>
                <TouchableOpacity onPress={() => navigation.navigate("식당 등록하기")}>
                  <View style={{flexDirection: 'row'}}>
                  <AntDesign name="hearto" size={22} color="gray" style={{marginRight: 15}} />
                  <Text style={styles.selectTxt}>가고 싶은 곳 등록</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Entypo name="circle-with-cross" size={50} color="#DA7469" style={styles.button2}/>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 5,
    zIndex: 1
  },
  titleView: {
  },
  titleTxt: {
    fontSize: 17
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

export default Menu;
