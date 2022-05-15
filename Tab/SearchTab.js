import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';

const SearchTab = ({navigation}) => {

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
      <View style = {styles.line}></View>
      <View style = {styles.chevronView}>
        <Text style = {styles.title}>태그 검색</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("TagSearch")}>
        <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
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
  }
});

export default SearchTab;