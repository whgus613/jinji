import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTab from "./TopTab";
import TagSearch from "../Tab/TagSearch";
import DetailFollow from "../Tab/DetailFollow";
import DetailStore from "../Tab/DetailStore";
import VisitReview from "../Tab/VisitReview";
import NotVisitReview from "../Tab/NotVisitReview";

const ns = createNativeStackNavigator();

const Stack = () => {
    return(
        <ns.Navigator>
            <ns.Screen
                name = "TopTab"
                component={TopTab}
                options={{headerShown: false}}    
            ></ns.Screen>
            <ns.Screen
                name = "TagSearch"
                component={TagSearch}  
                options={{headerTitleStyle: {color: "#FFF"}}}  
            ></ns.Screen>    
            <ns.Screen
                name = "DetailFollow"
                component={DetailFollow}  
                options={{headerTitleStyle: {color: "#FFF"}}}  
            ></ns.Screen>  
            <ns.Screen
                name = "DetailStore"
                component={DetailStore}  
                options={{headerTitleStyle: {color: "#FFF"}}}  
            ></ns.Screen>  
            <ns.Screen
                name = "NotVisitReview"
                component={NotVisitReview}  
                options={{headerTitleStyle: {color: "#FFF"}}}  
            ></ns.Screen> 
            <ns.Screen
                name = "VisitReview"
                component={VisitReview}  
                options={{headerTitleStyle: {color: "#FFF"}}}  
            ></ns.Screen> 
        </ns.Navigator>
    )
}

export default Stack;