import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

const MissionCard = ({ title, description, image }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Delius-Regular": require("../../assets/fonts/Delius-Regular.ttf"),
        "LilitaOne-Regular": require("../../assets/fonts/LilitaOne-Regular.ttf"),
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
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver detalles</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 1,
    boxShadow: "1px 8px 7px #9E9E9E" 
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#FF9D23",
    fontFamily: "LilitaOne-Regular",
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginVertical: 3,
    fontFamily: "Delius-Regular",
    
  },
  buttonContainer: {
    alignSelf: "flex-start",
  },
  button: {
    backgroundColor: "#CFD5D3",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontFamily: "Delius-Regular",
  },
});

export default MissionCard;
