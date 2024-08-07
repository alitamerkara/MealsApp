import { FlatList } from "react-native";
import { CATEGORIES } from "../datas/dummy-data";
import CategoryCard from "./CategoryCard";

const Categories = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item, index) => (
        <CategoryCard
          key={index}
          name={item.item.title}
          color={item.item.color}
          id={item.item.id}
          navigation={navigation}
        />
      )}
      numColumns={2}
    />
  );
};

export default Categories;
