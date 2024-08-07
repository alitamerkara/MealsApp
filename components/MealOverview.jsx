import { View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../datas/dummy-data";
import MealItem from "./MealItem";
import { useLayoutEffect } from "react";

const MealOverview = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((item) => item.id === catId).title;
    navigation.setOptions(
      {
        title: catTitle,
      },
      [navigation, catId]
    );
  });
  const catId = route.params.itemId;
  const meal = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  const runMealItem = (item) => {
    return <MealItem item={item} />;
  };
  return (
    <View>
      <FlatList
        data={meal}
        keyExtractor={(item) => item.id}
        renderItem={runMealItem}
      />
    </View>
  );
};

export default MealOverview;
