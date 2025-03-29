import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";

const Header = ({ header, headerText }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Delius-Regular": require("../assets/fonts/Delius-Regular.ttf"),
        "LilitaOne-Regular": require("../assets/fonts/LilitaOne-Regular.ttf"),
      });
      console.log("Fuentes cargadas correctamente");
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF9D23" />
      </View>
    );
  }

  return (
    <View style={styles.header}>
      <Icon name="map-marker" size={24} color="#5C4F28" />
      <Text style={styles.headerText}>CacomiXplorer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD65A",
    padding: 30,
    justifyContent: "flex-start",
    shadowColor: "black",
    shadowOpacity: 1,
    borderRadius: 10
  },
  
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    fontFamily: "LilitaOne-Regular",
    color: "#5C4F28",
  },
});

export default Header;
