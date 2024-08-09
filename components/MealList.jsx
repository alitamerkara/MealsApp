import { FlatList, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ data }) => {
  const runMealItem = (item) => {
    return <MealItem item={item} />;
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={runMealItem}
      />
    </View>
  );
};

export default MealList;
