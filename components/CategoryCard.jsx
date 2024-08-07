import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoryCard = ({ name, color, navigation, id }) => {
  const pressHandler = () => {
    navigation.navigate("MealOverview", {
      itemId: id,
    });
  };
  return (
    <View style={[styles.gridContainer, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "null",
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
export default CategoryCard;
