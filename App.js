import React from "react";
import Categories from "./components/Categories"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverview from "./components/MealOverview";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#9156ff'},
    headerTintColor:"white",
    contentStyle:{backgroundColor:'#ccc'}
  }}>
    <Stack.Screen name="MealCategories" component={Categories} options={{
      title:"All Categories"
    }}/>
    <Stack.Screen name="MealOverview" component={MealOverview}/>
  </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;