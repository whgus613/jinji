import { NavigationContainer } from "@react-navigation/native";
import Root from "./Nav/Root";
import React, {useEffect, useState} from 'react';

const App = () => {

  return(
    <NavigationContainer>
        <Root />
    </NavigationContainer>
  )
}

export default App;