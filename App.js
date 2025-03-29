import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import MissionList from "./components/Misiones/MissionList";
import Header from "./components/Header";
import MissionScreen from "./components/Misiones/MissionScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <MissionList /> */}
      <MissionScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEB3B",
  },
});

export default App;
