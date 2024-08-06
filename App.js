import React from "react";
// import Categories from "./components/Categories";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./components/Categories"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Meal Categories" component={Categories}/>
  </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;