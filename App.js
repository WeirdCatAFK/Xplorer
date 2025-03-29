import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import MissionList from "./components/Misiones/MissionList";
import Header from "./components/Header";
import MissionScreen from "./components/Misiones/MissionScreen";
import Inicio from "./components/Inicio";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     
      {/* <MissionList /> */}
      {/* <MissionScreen /> */}
      <Inicio />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE856",
  },
});

export default App;
