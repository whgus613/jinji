import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Nav/Root";
import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';

const test = () => {

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
                <Text>로딩</Text>
        </View>
    ) : (
        <ScrollView style={{flex: 1}}>
            <View  
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "space-between",
                    marginTop: 30,
                }}>
                <View style={{marginLeft: 22}}>
                    {wholeData.map((image)=>{
                        return(
                            <TouchableOpacity
                                key={image.ROWNUM}
                                style={{}}>
                                <Text>{image.ccnt_name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

export default test;