import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import MissionList from "./components/Misiones/MissionList";
import Header from "./components/Header";
import BusquedaScreen from "./components/Busqueda/BusquedaScreen";
import LogrosScreen from "./components/Logros/LogrosScreen";
import PerfilScreen from "./components/Perfil/PerfilScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <PerfilScreen/>
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
