import React from "react";
import Categories from "./components/Categories"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverview from "./components/MealOverview";
import MealDetail from "./components/MealDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./components/Favorites";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()
const App = () => {

const AddDrawer= ()=>{
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#9156ff'},
      headerTintColor:"white",
      contentStyle:{backgroundColor:'#ccc'}
    }}>
      <Drawer.Screen name="Categories" component={Categories}/>
      <Drawer.Screen name= "Favorites" component={Favorites}/>
    </Drawer.Navigator>
  )
}
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#9156ff'},
    headerTintColor:"white",
    contentStyle:{backgroundColor:'#ccc'}
  }}>
    <Stack.Screen name="MealCategories" component={AddDrawer} options={{
      title:"All Categories",
      headerShown:false
    }}/>
    <Stack.Screen name="MealOverview" component={MealOverview}/>
    <Stack.Screen name="MealDetail" component={MealDetail}/>
  </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;