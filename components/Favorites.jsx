import { Button, Text } from "react-native";
import { FavoritesContext } from "../store/context/favoritesContext";
import { useContext } from "react";
import { MEALS } from "../datas/dummy-data";
import MealList from "./MealList";

const Favorites = () => {
  const FavManage = useContext(FavoritesContext);
  const value = MEALS.filter((item) => FavManage.ids.includes(item.id));

  return <MealList data={value} />;
};

export default Favorites;
