import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import TopTab from "./TopTab";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator screenOptions={{ 
            headerShown: false,
            }}>
            <Nav.Screen name="Stack" component={Stack}></Nav.Screen>
            <Nav.Screen name="TopTab" component={TopTab}></Nav.Screen>
        </Nav.Navigator>
    );
};

export default Root;