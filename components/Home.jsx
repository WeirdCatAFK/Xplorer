import { View, Text, StyleSheet } from "react-native";
import ReaderNFC from "./ReaderNFC.jsx";

const Home = () => {
  return (
    <View style={styles.container}>
      <ReaderNFC />
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
