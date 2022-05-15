import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Local = () => {

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [jeju, setJeju] = useState([]);

  
  const citiesDropdownRef = useRef();

  useEffect(() => {
      setCountries([
        {title: '제주시', cities: [ {title: '한림읍'},
                                    {title: '애월읍'},
                                    {title: '구좌읍'},
                                    {title: '조천읍'},
                                    {title: '한경면'},
                                    {title: '추자면'},
                                    {title: '우도면'},
                                    {title: '일도1동'},
                                    {title: '일도2동'},
                                    {title: '이도1동'},
                                    {title: '이도2동'},
                                    {title: '삼도1동'},
                                    {title: '삼도2동'},
                                    {title: '용담1동'},
                                    {title: '용담2동'},
                                    {title: '건입동'},
                                    {title: '화북동'},
                                    {title: '삼양동'},
                                    {title: '봉개동'},
                                    {title: '아라동'},
                                    {title: '오라동'},
                                    {title: '연동'},
                                    {title: '노형동'},
                                    {title: '외도동'},
                                    {title: '이호동'},
                                    {title: '도두동'}
        ]},
        {title: '서귀포시', cities: [ {title: '대정읍'},
                                      {title: '남원읍'},
                                      {title: '성산읍'},
                                      {title: '안덕면'},
                                      {title: '표선면'},
                                      {title: '송산동'},
                                      {title: '정방동'},
                                      {title: '중앙동'},
                                      {title: '천지동'},
                                      {title: '효돈동'},
                                      {title: '영천동'},
                                      {title: '동홍동'},
                                      {title: '서홍동'},
                                      {title: '대륜동'},
                                      {title: '대천동'},
                                      {title: '중문동'},
                                      {title: '예래동'}
        ]},
      ]);
      setJeju([{title: '제주'}]);
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.dropdownsRow}>
      <SelectDropdown
        data={jeju}
        onSelect={(selectedItem, index) => {
          citiesDropdownRef.current.reset();
        }}
        defaultButtonText={'도'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.title;
        }}
        rowTextForSelection={(item, index) => {
          return item.title;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.txtStyle}
        renderDropdownIcon={isOpened => {
          return <Entypo name={isOpened ? 'triangle-up' : 'triangle-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.txtStyle}
      />
      <View style={styles.divider} />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          citiesDropdownRef.current.reset();
          setCities([]);
          setCities(selectedItem.cities);
        }}
        defaultButtonText={'시'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.title;
        }}
        rowTextForSelection={(item, index) => {
          return item.title;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.txtStyle}
        renderDropdownIcon={isOpened => {
          return <Entypo name={isOpened ? 'triangle-up' : 'triangle-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.txtStyle}
      />
      <View style={styles.divider} />
      <SelectDropdown
        ref={citiesDropdownRef}
        data={cities}
        onSelect={(selectedItem, index) => {
        }}
        defaultButtonText={'동'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.title;
        }}
        rowTextForSelection={(item, index) => {
          return item.title;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.txtStyle}
        renderDropdownIcon={isOpened => {
          return <Entypo name={isOpened ? 'triangle-up' : 'triangle-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowTextStyle={styles.txtStyle}
       />
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
  dropdownsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    marginTop: -10
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

export default Local;