import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "../Common/Header"; 
import NavBar from "../Common/NavBar"; 
import LogrosList from "./LogrosList";

const LogrosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LogrosList />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default LogrosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    padding: 16,
  },
});
