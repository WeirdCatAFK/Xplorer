import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name="map-marker" size={24} color="#000" />
      <Text style={styles.headerText}>CacomiXplorer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFEB3B",
    padding: 15,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    
    color: "#5C4F28",
  },
});

export default Header;
