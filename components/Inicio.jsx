import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

const Inicio = ({ title, subtitle, buttonText}) => {
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
    <View style={styles.container}>
        <View style = {styles.circle1}>
          <View style={styles.circle2}>
            <Image source={{uri: "https://media-public.canva.com/1mGMc/MAF-Ob1mGMc/1/tl.png"}} style={styles.image} />
          </View>
      </View>
      <Text style={styles.title}>CacomiXplorer</Text>
      <Text style={styles.subtitle}>Elige tu próxima aventura</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9D23",
    justifyContent: "center",
    alignItems: "center",
  },
  circle1: {
    width:210,
    height: 210,
    borderRadius: 100,
    backgroundColor: "#FFE856",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  circle2: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: "#FFD65A",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 190,
    height: 190,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "LilitaOne-Regular",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 20,
    marginTop: 5,
    fontFamily: "Delius-Regular"
  },
  button: {
    backgroundColor: "#2ECC71",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontFamily: "LilitaOne-Regular"
  },
});

export default Inicio;
