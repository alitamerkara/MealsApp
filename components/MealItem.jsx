import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const MealItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View>
          <Image source={{ uri: item.item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.item.title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{item.item.duration}m</Text>
          <Text>{item.item.complexity.toUpperCase()}</Text>
          <Text>{item.item.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "null",
    backgroundColor: "white",
    elevation: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 2,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    justifyContent: "space-around",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
export default MealItem;
