import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import TopTab from "./TopTab";

const stck = createNativeStackNavigator();

const Root = () => {
    return(
        <stck.Navigator>
            <stck.Screen
                name = "TopTab"
                component = {TopTab}
            ></stck.Screen>
            <stck.Screen
                name = "Stack"
                component = {Stack}
            ></stck.Screen>
        </stck.Navigator>
    )
}