import { View, Text, StyleSheet } from "react-native";
import ReadNFC from "./ReadNFC.jsx";

const Home = () => {
  return (
    <View style={styles.container}>
      <ReadNFC />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212", // Match the background color
  },
});

export default Home;
