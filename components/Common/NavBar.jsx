import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Ionicons name="home" size={30} color="#5a3e1b" />
      <Ionicons name="location" size={30} color="#5a3e1b" />
      <Ionicons name="person" size={30} color="#5a3e1b" />
      <Ionicons name="trophy" size={30} color="#5a3e1b" />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FDD835",
    width: "100%",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 10,
  },
});
