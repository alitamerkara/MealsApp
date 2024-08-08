import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { MEALS } from "../datas/dummy-data";
import { useLayoutEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

const MealDetail = ({ route, navigation }) => {
  const [active, setActive] = useState(false);
  const id = route.params.id;
  const handlerPress = () => {
    setActive((active) => !active);
    console.log(active);
  };
  const value = MEALS?.find((item) => {
    return item.id === id;
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={handlerPress}>
            {active ? (
              <Entypo name="star" size={30} color="white" />
            ) : (
              <Entypo name="star-outlined" size={30} color="white" />
            )}
          </Pressable>
        );
      },
    });
  }, [active, navigation, handlerPress]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: value.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{value.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{value.duration}m</Text>
          <Text style={styles.detailsItem}>
            {value.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailsItem}>
            {value.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.title}>Integredients</Text>
        <View>
          {value.ingredients.map((item, index) => (
            <Text style={styles.items} key={index}>
              {item}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Steps</Text>
        <View>
          {value.steps.map((item, index) => (
            <Text style={styles.items} key={index}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#9156ff",
    paddingBottom: 10,
    width: 300,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  detailsItem: {
    paddingHorizontal: 16,
  },
  items: {
    textAlign: "center",
    marginVertical: 2,
    backgroundColor: "#9156ff",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    marginHorizontal: 20,
    width: 250,
    marginBottom: 10,
  },
});
export default MealDetail;
