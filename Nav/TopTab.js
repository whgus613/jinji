import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchTab from "../Tab/SearchTab";
import FollowTab from "../Tab/FollowTab";
import HomeTab from "../Tab/HomeTab";
import ListTab from "../Tab/ListTab";
import MyTab from "../Tab/MyTab";
import HomeSample from "../Tab/HomeSample";
import SearchSample from "../Tab/SearchSample";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({route}) => {
    return (
        <Tab.Navigator
            initialRouteName={"홈"}
            tabBarPosition = "bottom"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarShowIcon: true,
                tabBarScrollEnabled: false,
                swipeEnabled: false,
                tabBarIndicatorStyle: {
                    backgroundColor: "white"
                }
            }}
            >
            <Tab.Screen
                name = "검색"
                component={SearchSample}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <FontAwesome name="search" size={24} color="#C7382A"/> ) : (
                        <FontAwesome name="search" size={24} color="gray"/>)
                }}
            />
            <Tab.Screen
                name = "팔로우"
                component={FollowTab}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <MaterialCommunityIcons name="message-settings-outline" size={24} color="#C7382A" /> ) : (
                        <MaterialCommunityIcons name="message-settings-outline" size={24} color="gray" />)
                }}
            />
            <Tab.Screen
                name = "홈"
                component={HomeSample}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Octicons name="home" size={24} color="#C7382A" /> ) : (
                        <Octicons name="home" size={24} color="gray" />)
                }}
            />
            <Tab.Screen
                name = "리스트"
                component={ListTab}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Feather name="heart" size={24} color="#C7382A" /> ) : (
                        <Feather name="heart" size={24} color="gray" />)
                }}
            />
            <Tab.Screen
                name = "마이"
                component={MyTab}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <AntDesign name="user" size={24} color="#C7382A" /> ) : (
                        <AntDesign name="user" size={24} color="gray" />)
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTab;