import { View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../datas/dummy-data";
import MealItem from "./MealItem";
import { useLayoutEffect } from "react";
import MealList from "./MealList";

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

  return <MealList data={meal} />;
};

export default MealOverview;
